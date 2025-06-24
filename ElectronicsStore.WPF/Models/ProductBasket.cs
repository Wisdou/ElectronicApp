using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ElectronicsStore.WPF.Models;

public class ProductBasket
{
    public required Guid ProductId { get; init; }
    
    public required Guid BasketId { get; init; }
    
    public required int Quantity { get; set; }
    
    public Product Product { get; init; } = null!;
    
    public Basket Basket { get; init; } = null!;
}

public class ProductBasketConfiguration : IEntityTypeConfiguration<ProductBasket>
{
    public void Configure(EntityTypeBuilder<ProductBasket> builder)
    {
        builder.HasKey(x => new { x.ProductId, x.BasketId });

        builder.HasOne(x => x.Product)
            .WithMany()
            .HasForeignKey(x => x.ProductId);
        
        builder.HasOne(e => e.Basket)
            .WithMany(e => e.Products)
            .HasForeignKey(x => x.BasketId);
    }
}