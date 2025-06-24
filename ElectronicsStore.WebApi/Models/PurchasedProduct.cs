using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ElectronicsStore.WebApi.Models;

public class PurchasedProduct
{
    public Guid Id { get; } = Guid.NewGuid();

    public required DateTimeOffset PurchaseDateTime { get; init; }

    public required Guid ProductId { get; init; }
    
    public required Guid UserId { get; init; }
    
    public required int Quantity { get; init; }
    
    public Product Product { get; init; } = null!;
    
    public User User { get; init; } = null!;
}

public class PurchasedProductConfiguration : IEntityTypeConfiguration<PurchasedProduct>
{
    public void Configure(EntityTypeBuilder<PurchasedProduct> builder)
    {
        builder.HasKey(e => e.Id);

        builder
            .HasOne(e => e.Product)
            .WithMany()
            .HasForeignKey(e => e.ProductId);
        
        builder
            .HasOne(e => e.User)
            .WithMany()
            .HasForeignKey(e => e.UserId);
    }
}