using System.Windows;
using ElectronicsStore.WPF.Data;
using ElectronicsStore.WPF.Models;
using ElectronicsStore.WPF.ViewModels;
using ElectronicsStore.WPF.Views;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace ElectronicsStore.WPF;

/// <summary>
/// Interaction logic for App.xaml
/// </summary>
public partial class App : Application
{
    public const string Name = "ElectronicsStore";

    public static IServiceProvider Services { get; }

    static App()
    {
        Services = Program.CreateHostBuilder(Environment.GetCommandLineArgs()).Build().Services;
    }

    protected override void OnStartup(StartupEventArgs e)
    {
        base.OnStartup(e);

        var scope = Services.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        dbContext.Database.Migrate();
        scope.Dispose();
        
        var vm = Services.GetRequiredService<MainWindowViewModel>();
        var window = Services.GetRequiredService<MainWindow>();
        
        window.DataContext = vm;
        window.Show();
    }
}