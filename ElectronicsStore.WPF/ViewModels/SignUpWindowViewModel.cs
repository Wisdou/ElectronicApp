using System.Windows;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using ElectronicsStore.WPF.Data;
using ElectronicsStore.WPF.Models;
using ElectronicsStore.WPF.Views;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace ElectronicsStore.WPF.ViewModels;

public partial class SignUpWindowViewModel : ObservableObject
{
    [ObservableProperty]
    [NotifyCanExecuteChangedFor(nameof(ConfirmCommand))]
    private string? _email;
    
    [ObservableProperty]
    [NotifyCanExecuteChangedFor(nameof(ConfirmCommand))]
    private string? _password;
    
    [RelayCommand(CanExecute = nameof(CanConfirm))]
    private async Task Confirm(Window window)
    {
        if (ConfirmCommand.IsRunning)
        {
            return;
        }

        using var scope = App.Services.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

        var normalizedEmail = Email!.Trim().ToUpper();
        if (await dbContext.Users.AnyAsync(e => e.NormalizedEmail == normalizedEmail))
        {
            MessageBox.Show("Email занят.", "Information", MessageBoxButton.OK, MessageBoxImage.Error);
            return;
        }

        var user = new User
        {
            Email = Email,
            NormalizedEmail = normalizedEmail,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(Password),
            Role = Role.User
        };
        
        dbContext.Users.Add(user);
        await dbContext.SaveChangesAsync();

        var vm = scope.ServiceProvider.GetRequiredService<SignInWindowViewModel>();
        var signInWindow = scope.ServiceProvider.GetRequiredService<SignInWindow>();

        signInWindow.DataContext = vm;
        signInWindow.Show();
        window.Close();
    }

    private bool CanConfirm() => !string.IsNullOrWhiteSpace(Email) &&
                                 !string.IsNullOrWhiteSpace(Password) && Password.Length > 6;
}