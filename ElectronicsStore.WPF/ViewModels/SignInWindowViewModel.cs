using System.Windows;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using ElectronicsStore.WPF.Data;
using ElectronicsStore.WPF.Infrastructure;
using ElectronicsStore.WPF.Views;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace ElectronicsStore.WPF.ViewModels;

public partial class SignInWindowViewModel : ObservableObject
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
        var currentUserService = scope.ServiceProvider.GetRequiredService<ICurrentUserService>();
        
        var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

        var user = await dbContext.Users.AsNoTracking().FirstOrDefaultAsync(e => e.NormalizedEmail == Email!.ToUpper());
        if (user is null)
        {
            MessageBox.Show("Неверный логин или пароль.", "Ошибка", MessageBoxButton.OK, MessageBoxImage.Error);
            return;
        }

        if (!BCrypt.Net.BCrypt.Verify(Password!, user.PasswordHash))
        {
            MessageBox.Show("Неверный логин или пароль.", "Ошибка", MessageBoxButton.OK, MessageBoxImage.Error);
            return;
        }
        
        currentUserService.Set(user);
        
        var vm = scope.ServiceProvider.GetRequiredService<MainWindowViewModel>();
        vm.CurrentUser = currentUserService.Get();
        window.Close();
    }

    [RelayCommand]
    private static void SignUp(Window window)
    {
        using var scope = App.Services.CreateScope();
        var vm = scope.ServiceProvider.GetRequiredService<SignUpWindowViewModel>();
        var signUpWindow = scope.ServiceProvider.GetRequiredService<SignUpWindow>();
        
        signUpWindow.DataContext = vm;
        signUpWindow.Show();
        
        window.Close();
    }

    private bool CanConfirm() => !string.IsNullOrWhiteSpace(Email) &&
                                 !string.IsNullOrWhiteSpace(Password);
}