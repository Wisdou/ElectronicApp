using System.ComponentModel.DataAnnotations;
using ElectronicsStore.WebApi.DAL;
using ElectronicsStore.WebApi.Models;
using ElectronicsStore.WebApi.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        var baseUrl = $"{request.Scheme}://{request.Host}";
        
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
                $"{baseUrl}/api/products/{e.ProductId}/image"))
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

            dbContext.PurchasedProducts.Add(purchasedProduct);
            dbContext.ProductBaskets.Remove(item);
        }

        await dbContext.SaveChangesAsync();
        return Ok();
    }
}