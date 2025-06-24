using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace ElectronicsStore.WPF.Data;

public class ApplicationDesignTimeDbContextFactory : IDesignTimeDbContextFactory<ApplicationDbContext>
{
    private const string ConnectionString = "User ID=postgres;Password=12345678;Host=localhost;Port=5432;Database=ElectronicsStoreDb;";
    
    public ApplicationDbContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>();
        optionsBuilder.UseNpgsql(ConnectionString);
        return new ApplicationDbContext(optionsBuilder.Options);
    }
}