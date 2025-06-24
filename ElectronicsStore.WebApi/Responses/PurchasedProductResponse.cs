namespace ElectronicsStore.WebApi.Responses;

public record PurchasedProductResponse(
    Guid Id,
    DateTimeOffset PurchasedDateTime,
    string ProductCategory,
    string ProductName,
    int Quantity,
    decimal Price,
    string UserEmail,
    string ImageUrl);