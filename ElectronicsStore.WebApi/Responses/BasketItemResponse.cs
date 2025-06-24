namespace ElectronicsStore.WebApi.Responses;

public record BasketItemResponse(
    Guid ProductId,
    Guid BasketId,
    string ProductCategory,
    string ProductName,
    int ProductQuantity,
    decimal ProductPrice,
    string ProductImageUrl);