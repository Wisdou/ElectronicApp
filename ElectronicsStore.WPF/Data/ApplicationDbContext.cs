using ElectronicsStore.WPF.Extensions;
using ElectronicsStore.WPF.Models;
using Microsoft.EntityFrameworkCore;

namespace ElectronicsStore.WPF.Data;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
{
    public DbSet<Product> Products { get; init; }
    
    public DbSet<Basket> Baskets { get; init; }
    
    public DbSet<User> Users { get; init; }
    
    public DbSet<ProductBasket> ProductBaskets { get; init; }
    
    public DbSet<PurchasedProduct> PurchasedProducts { get; init; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
        modelBuilder.Seed();
    }
}