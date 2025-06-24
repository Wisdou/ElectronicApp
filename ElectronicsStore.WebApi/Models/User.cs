using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ElectronicsStore.WebApi.Models;

public class User
{
    public required Guid Id { get; init; }
    
    public required string Email { get; init; }
    
    public required string NormalizedEmail { get; init; }
    
    public required string PasswordHash { get; init; }
    
    public required Role Role { get; init; }
}

public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.HasKey(x => x.Id);
        
        builder
            .HasIndex(x => x.NormalizedEmail)
            .IsUnique();
        
        builder.Property(e => e.Role).HasConversion(e => e.ToString(), e => Enum.Parse<Role>(e));
    }
}

public enum Role
{
    Admin,
    User
}