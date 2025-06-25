using System.ComponentModel.DataAnnotations;
using System.Reflection;
using System.Text.Json;
using ClosedXML.Excel;
using ClosedXML.Report;
using ElectronicsStore.WebApi.DAL;
using ElectronicsStore.WebApi.Models;
using ElectronicsStore.WebApi.Requests;
using ElectronicsStore.WebApi.Responses;
using FluentValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ElectronicsStore.WebApi.Controllers;

public class ProductsController(ApplicationDbContext dbContext) : BaseController
{
    private static readonly string[] ValidImageMimeTypes =
    [
        "image/jpeg",
        "image/png"
    ];
    
    private static readonly JsonSerializerOptions JsonSerializerOptions = new() { PropertyNameCaseInsensitive = true };
    
    [HttpGet("image/{id}")]
    public async Task<IActionResult> LoadImage(Guid id)
    {
        var cover = await dbContext
            .Products
            .Where(t => t.Id == id)
            .Select(t => t.Image)
            .FirstOrDefaultAsync();

        if (cover is null)
        {
            return NotFound();
        }

        return File(cover, "application/octet-stream");
    }
    
    public record UpdateProductForm(
        IFormFile? NewImage,
        string JsonPart);

    [HttpPost("update/{productId}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> UpdateProduct(Guid productId, [FromForm] UpdateProductForm form, IValidator<UpdateProductRequest> validator)
    {
        if (string.IsNullOrWhiteSpace(form.JsonPart))
        {
            return BadRequest();
        }
        
        var request = JsonSerializer.Deserialize<UpdateProductRequest>(form.JsonPart, JsonSerializerOptions);
        if (request is null)
        {
            return BadRequest();
        }
        
        var validationResult = await validator.ValidateAsync(request);
        if (!validationResult.IsValid)
        {
            return BadRequest(validationResult.Errors.First().ErrorMessage);
        }

        if (form.NewImage is not null && !ValidateImage(form.NewImage))
        {
            return BadRequest();
        }
        
        var product = await dbContext.Products.FirstOrDefaultAsync(p => p.Id == productId);
        if (product is null)
        {
            return BadRequest();
        }

        product.Price = request.Price;
        product.Description = request.Description;
        product.Name = request.Name;
        product.Category = request.Category;
        product.AvailableQuantity = request.Quantity;
        
        if (form.NewImage is not null)
        {
            using var stream = new MemoryStream();
            await form.NewImage.CopyToAsync(stream);
            stream.Seek(0, SeekOrigin.Begin);
            product.Image = stream.ToArray();
        }
        
        await dbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpGet("get/{productId}")]
    public async Task<IActionResult> GetProduct(Guid productId)
    {
        var product = await dbContext.Products.FirstOrDefaultAsync(p => p.Id == productId);

        return Ok(new
        {
            product.Id,
            product.Name,
            Category = product.Category.ToString(),
            product.Price,
            Quantity = product.AvailableQuantity,
            product.Description,
        });
    }
    
    public record AddProductForm(
        IFormFile? Image,
        string? JsonPart);

    [HttpPost("add")]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult> AddProduct([FromForm] AddProductForm form, IValidator<AddProductRequest> validator)
    {
        if (string.IsNullOrWhiteSpace(form.JsonPart))
        {
            return BadRequest();
        }
        
        var request = JsonSerializer.Deserialize<AddProductRequest>(form.JsonPart, JsonSerializerOptions);
        if (request is null)
        {
            return BadRequest();
        }
        
        var validationResult = await validator.ValidateAsync(request);
        if (!validationResult.IsValid)
        {
            return BadRequest(validationResult.Errors.First().ErrorMessage);
        }

        if (!ValidateImage(form.Image))
        {
            return BadRequest("Невалидный файл изображения.");
        }

        using var imageMemoryStream = new MemoryStream();
        await form.Image.CopyToAsync(imageMemoryStream);
        imageMemoryStream.Seek(0, SeekOrigin.Begin);
        
        var product = new Product()
        {
            Name = request.Name.Trim(),
            Description = request.Description.Trim(),
            Category = request.Category,
            Price = request.Price,
            AvailableQuantity = request.Quantity,
            Image = imageMemoryStream.ToArray(),
        };
        
        dbContext.Products.Add(product);
        await dbContext.SaveChangesAsync();
        
        return Created();
    }

    [HttpGet]
    public async Task<IActionResult> GetProducts(
        ProductCategory? category = null,
        string? searchText = null)
    {
        var query = dbContext.Products.AsQueryable();

        if (category is not null)
        {
            query = query.Where(x => x.Category == category);
        }

        if (!string.IsNullOrWhiteSpace(searchText))
        {
            searchText = searchText.ToUpper().Trim();
            query = query.Where(x => x.Name.ToUpper().Contains(searchText) || 
                                     x.Description.ToUpper().Contains(searchText));
        }
        
        var request = HttpContext.Request;
        var baseUrl = $"http://217.198.9.32/api";

        var result = (await query
            .OrderBy(x => x.Name)
            .ToListAsync())
            .GroupBy(x => (x.Name, x.Description, x.Price))
            .Select(e => new ProductResponse(
                e.First().Id,
                e.First().Name,
                e.First().Description,
                e.First().Price,
                $"{baseUrl}/api/products/image/{e.First().Id}?" + DateTime.Now.Millisecond,
                e.First().Category.ToString(),
                e.Sum(x => x.AvailableQuantity)))
            .ToList();
        
        return Ok(result);
    }

    [HttpPost("delete")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> DeleteProduct([FromBody] Guid productId)
    {
        var affectedRowsCount = await dbContext
            .Products
            .Where(e => e.Id == productId)
            .ExecuteDeleteAsync();

        if (affectedRowsCount > 0)
        {
            return Ok();
        }
        
        return BadRequest();
    }

    [HttpGet("purchased")]
    [Authorize]
    public async Task<IActionResult> GetPurchasedProducts()
    {
        var currentUserId = Guid.Parse(User.Claims.First(e => e.Type == "UserId").Value);
        var currentUser = await dbContext.Users.FirstAsync(e => e.Id == currentUserId);
        
        var query = dbContext.PurchasedProducts.AsQueryable();

        if (currentUser.Role == Role.User)
        {
            query = query.Where(e => e.UserId == currentUser.Id);
        }
        
        var request = HttpContext.Request;
        var baseUrl = $"http://217.198.9.32/api";
        var result = await query
            .OrderByDescending(e => e.PurchaseDateTime)
            .Select(e => new PurchasedProductResponse(
                e.Id,
                e.PurchaseDateTime,
                e.Product.Category.ToString(),
                e.Product.Name,
                e.Quantity,
                e.Product.Price,
                e.User.Email,
                $"{baseUrl}/api/products/image/{e.ProductId}"
                ))
            .ToListAsync();
        
        return Ok(result);
    }

    [HttpPost("purchase/{productId}")]
    [Authorize]
    public async Task<IActionResult> PurchaseProduct(Guid productId, [Range(1, int.MaxValue)] int quantity)
    {
        var targetProduct = await dbContext.Products.FirstAsync(e => e.Id == productId);
        if (targetProduct.AvailableQuantity < quantity)
        {
            return BadRequest("Выбранное кол-во превышает остаток.");
        }
        
        var currentUserId = Guid.Parse(User.Claims.First(e => e.Type == "UserId").Value);
        var purchasedProduct = new PurchasedProduct
        {
            ProductId = productId,
            UserId = currentUserId,
            Quantity = quantity,
            PurchaseDateTime = DateTimeOffset.UtcNow,
        };
        
        targetProduct.AvailableQuantity -= quantity;
        dbContext.PurchasedProducts.Add(purchasedProduct);
        await dbContext.SaveChangesAsync();

        return Ok();
    }

    [HttpPost("from-excel")]
    [Authorize(Roles = "Admin")]
    public async Task<OkResult> AddProductsFromExcel(IFormFile sheet)
    {
        using var workbook = new XLWorkbook(sheet.OpenReadStream());
        var worksheet = workbook.Worksheet(1);
        
        var picturesByCellAddress
            = worksheet.Pictures.ToDictionary(pic => pic.TopLeftCell.Address);

        foreach (var row in worksheet.RowsUsed())
        {
            var name = row.Cell(1).GetValue<string>();
            var description = row.Cell(2).GetValue<string>();
            var category = row.Cell(3).GetValue<string>();
            var price = row.Cell(4).GetValue<decimal>();
            var quantity = row.Cell(5).GetValue<int>();

            if (string.IsNullOrWhiteSpace(name) || string.IsNullOrWhiteSpace(description) ||
                string.IsNullOrWhiteSpace(category) || price <= 0 || quantity <= 0 ||
                !picturesByCellAddress.TryGetValue(row.Cell(6).Address, out var picture))
            {
                continue;
            }

            using var p = picture;
            var imageBytes = p.ImageStream.ToArray();

            var product = new Product
            {
                Name = name,
                Description = description,
                Category = Enum.Parse<ProductCategory>(category),
                Price = price,
                AvailableQuantity = quantity,
                Image = imageBytes
            };

            dbContext.Products.Add(product);
        }

        await dbContext.SaveChangesAsync();
        return Ok();
    }

    public enum ReportType
    {
        PurchasingReport,
        AvailableCountReport
    }
    
    [HttpGet("report")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> GenerateReport(ReportType reportType)
    {
        return reportType switch
        {
            ReportType.PurchasingReport => File(await GeneratePurchasingReport(),
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),
            ReportType.AvailableCountReport => File(await GenerateAvailableCountReport(),
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),
            _ => BadRequest()
        };
    }
    
    private async Task<MemoryStream> GeneratePurchasingReport()
    {
        var items = await dbContext
            .PurchasedProducts
            .GroupBy(e => e.Product)
            .Select(e => new
            {
                e.Key.Name,
                e.Key.Description,
                PurchasedCount = e.Sum(o => o.Quantity),
                PurchasedAmount = e.Key.Price * e.Sum(o => o.Quantity),
            })
            .ToListAsync();

        var data = new
        {
            Items = items,
        };

        await using var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream("ElectronicsStore.WebApi.ШаблонОтчетаПоПродажам.xlsx");
        using var template = new XLTemplate(stream);

        template.AddVariable(data);
        template.Generate();
        
        template.Workbook
            .Worksheets
            .First()
            .ColumnsUsed()
            .AdjustToContents();

        var result = new MemoryStream();
        template.SaveAs(result);
        result.Seek(0, SeekOrigin.Begin);
        return result;
    }
    
    private async Task<MemoryStream> GenerateAvailableCountReport()
    {
        var items = await dbContext
            .Products
            .Select(e => new
            {
                e.Name,
                e.Description, 
                e.AvailableQuantity,
            })
            .ToListAsync();

        var data = new
        {
            Items = items,
        };

        await using var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream("ElectronicsStore.WebApi.ШаблонОтчетаПоОстаткам.xlsx");
        using var template = new XLTemplate(stream);

        template.AddVariable(data);
        template.Generate();
        
        template.Workbook
            .Worksheets
            .First()
            .ColumnsUsed()
            .AdjustToContents();
        
        var result = new MemoryStream();
        template.SaveAs(result);
        result.Seek(0, SeekOrigin.Begin);
        return result;
    }
    
    private static bool ValidateImage(IFormFile img)
    {
        return ValidImageMimeTypes.Contains(img.ContentType) && img.Length > 0;
    }
}