using System.Text.Json.Serialization;
using ElectronicsStore.WebApi.Models;
using FluentValidation;

namespace ElectronicsStore.WebApi.Requests;

public record UpdateProductRequest(
    string Name,
    string Description,
    [property: JsonConverter(typeof(JsonStringEnumConverter))]
    ProductCategory Category,
    decimal Price,
    int Quantity);
    
public class UpdateProductRequestValidator : AbstractValidator<UpdateProductRequest>
{
    public UpdateProductRequestValidator()
    {
        RuleFor(x => x.Name).NotEmpty();
        RuleFor(x => x.Description).NotEmpty();
        RuleFor(e => e.Quantity).GreaterThan(0);
        RuleFor(e => e.Price).GreaterThan(0);
    }
}