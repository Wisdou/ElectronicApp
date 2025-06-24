namespace ElectronicsStore.WebApi.Responses;

public record ProductResponse(
    Guid Id,
    string Name,
    string Description,
    decimal Price,
    string ImageUrl,
    string Category, 
    int Quantity);