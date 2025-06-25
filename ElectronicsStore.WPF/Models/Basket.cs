using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ElectronicsStore.WPF.Models;

public class Basket
{
    public Guid Id { get; init; } = Guid.NewGuid();
    
    public required Guid UserId { get; init; }
    
    public User User { get; init; } = null!;
    
    public ICollection<ProductBasket> Products { get; init; } = new List<ProductBasket>();
}

public class BasketConfiguration : IEntityTypeConfiguration<Basket>
{
    public void Configure(EntityTypeBuilder<Basket> builder)
    {
        builder.HasKey(x => x.Id);
        
        builder
            .HasOne(e => e.User)
            .WithOne()
            .HasForeignKey<Basket>(e => e.UserId);
    }
}