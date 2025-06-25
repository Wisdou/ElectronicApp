using ElectronicsStore.WPF.Models;
using Microsoft.EntityFrameworkCore;

namespace ElectronicsStore.WPF.Extensions;

public static class ModelBuilderEx
{
    private const string FirstUserPwd = "Admin_123#";

    private static readonly User FirstUser = new()
    {
        PasswordHash = BCrypt.Net.BCrypt.HashPassword(FirstUserPwd),
        Role = Role.Admin,
        Email = "admin@gmail.com",
        NormalizedEmail = "ADMIN@GMAIL.COM"
    };
    
    public static void Seed(this ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>().HasData(FirstUser);
    }
}