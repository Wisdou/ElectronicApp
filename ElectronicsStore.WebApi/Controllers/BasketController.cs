using System.ComponentModel.DataAnnotations;
using ElectronicsStore.WebApi.DAL;
using ElectronicsStore.WebApi.Models;
using ElectronicsStore.WebApi.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuestPDF.Fluent;

namespace ElectronicsStore.WebApi.Controllers;

public class BasketController(ApplicationDbContext dbContext) : BaseController
{
    [HttpPost("{productId}")]
    [Authorize]
    public async Task<IActionResult> AddToBasket(Guid productId, [Range(1, int.MaxValue)] int quantity)
    {
        var product = await dbContext.Products.FirstOrDefaultAsync(e => e.Id == productId);
        if (product is null)
        {
            return BadRequest();
        }

        if (product.AvailableQuantity < quantity)
        {
            return BadRequest("Выбранное кол-во превышает остаток.");
        }
        
        var currentUserId = Guid.Parse(User.Claims.First(e => e.Type == "UserId").Value);
        var targetBasket = await dbContext
            .Baskets
            .FirstOrDefaultAsync(e => e.UserId == currentUserId);
        
        if (targetBasket is null)
        {
            targetBasket = new Basket() { UserId = currentUserId };
            dbContext.Baskets.Add(targetBasket);
        }
        
        var basketItem = await dbContext
            .ProductBaskets
            .FirstOrDefaultAsync(e => e.ProductId == productId && e.BasketId == targetBasket.Id);
        
        if (basketItem is null)
        {
            basketItem = new ProductBasket
            {
                ProductId = productId,
                BasketId = targetBasket.Id,
                Quantity = quantity,
            };
            dbContext.ProductBaskets.Add(basketItem);
        }
        else
        {
            basketItem.Quantity += quantity;
        }
        
        await dbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpGet]
    [Authorize]
    public async Task<IActionResult> GetBasket()
    {
        var currentUserId = Guid.Parse(User.Claims.First(e => e.Type == "UserId").Value);
        
        var request = HttpContext.Request;
        var baseUrl = $"http://217.198.9.32/api";

        var result = await dbContext
            .ProductBaskets
            .Where(e => e.Basket.UserId == currentUserId)
            .OrderBy(e => e.Product.Name)
            .Select(e => new BasketItemResponse(
                e.ProductId,
                e.BasketId,
                e.Product.Category.ToString(),
                e.Product.Name,
                e.Quantity,
                e.Product.Price,
                $"{baseUrl}/api/products/image/{e.ProductId}"))
            .ToListAsync();
        
        return Ok(result);
    }

    [HttpPost("delete/{productId}")]
    [Authorize]
    public async Task<IActionResult> DeleteProductFromBasket(Guid productId)
    {
        var currentUserId = Guid.Parse(User.Claims.First(e => e.Type == "UserId").Value);
        var item = await dbContext.ProductBaskets.FirstOrDefaultAsync(e => e.ProductId == productId && e.Basket.UserId == currentUserId);
        if (item is null)
        {
            return BadRequest();
        }
        
        dbContext.ProductBaskets.Remove(item);
        await dbContext.SaveChangesAsync();
        
        return Ok();
    }

    [HttpPost("buy")]
    [Authorize]
    public async Task<IActionResult> BuyProductsFromBasket([FromBody] Guid[] productIds)
    {
        var currentUserId = Guid.Parse(User.Claims.First(e => e.Type == "UserId").Value);
        var items = await dbContext
            .ProductBaskets
            .Where(e => e.Basket.UserId == currentUserId && productIds.Contains(e.ProductId))
            .Include(e => e.Product)
            .ToListAsync();
        
        foreach (var item in items.Where(item => item.Product.AvailableQuantity < item.Quantity))
        {
            return BadRequest($"Недостаточно товара \"{item.Product.Name}\". Доступно: {item.Product.AvailableQuantity}.");
        }

        decimal totalSum = 0;
        int totalQuantity = 0;
        DateTime currDate = DateTime.Now;

        foreach (var item in items)
        {
            var purchasedProduct = new PurchasedProduct
            {
                ProductId = item.ProductId,
                UserId = currentUserId,
                Quantity = item.Quantity,
                PurchaseDateTime = DateTimeOffset.UtcNow,
            };

            item.Product.AvailableQuantity -= item.Quantity;

            totalSum += item.Quantity * item.Product.Price;
            totalQuantity += item.Quantity;

            dbContext.PurchasedProducts.Add(purchasedProduct);
            dbContext.ProductBaskets.Remove(item);
        }

        var docs = Document.Create(container =>
        {
            container.Page(page =>
            {
                page.Margin(20);
                page.DefaultTextStyle(x => x.FontFamily("Arial").FontSize(16));

                page.Header()
                    .Row(row =>
                    {
                        row.RelativeItem()
                        .Text("Чек на пожертвование")
                        .FontSize(18)
                        .Bold()
                        .AlignCenter();
                    });

                page.Content()
                    .Column(column =>
                    {
                        column.Item()
                    .Padding(10)
                        .Text($"Дата оформления заявки: {currDate:dd.MM.yyyy HH:mm}")
                        .FontSize(14)
                        .AlignCenter();

                        column.Item().PaddingTop(10);
                        column.Item()
                        .Text("Сумма заказа: ")
                        .FontSize(14)
                        .Bold();
                        column.Item()
                    .Text($"{totalSum}\n")
                    .FontSize(14);

                        column.Item().PaddingTop(10);

                        column.Item()
                        .Text("Число позиций: ")
                        .FontSize(14)
                        .Bold();

                        column.Item()
                        .Text($"{totalQuantity}\n")
                        .FontSize(14);
                    });

                page.Footer()
                    .AlignCenter()
                    .Text("Спасибо за выбор нашего магазина!")
                    .FontSize(14);
            });
        }).GeneratePdf();

        var base64Data = Convert.ToBase64String(docs);

        await dbContext.SaveChangesAsync();
        return Ok(new { File = base64Data });
    }
}