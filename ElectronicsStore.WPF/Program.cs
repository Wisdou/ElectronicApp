using System.IO;
using System.Windows;
using ElectronicsStore.WPF.Data;
using ElectronicsStore.WPF.Infrastructure;
using ElectronicsStore.WPF.ViewModels;
using ElectronicsStore.WPF.Views;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Serilog;

namespace ElectronicsStore.WPF;

public class Program
{
    private static bool IsInDebug { get; set; }

    private static Mutex? _mutex;

    [STAThread]
    public static void Main(string[] args)
    {

#if DEBUG
        IsInDebug = true;
#endif

        Log.Logger = GetLoggerConfiguration().CreateLogger();

        Environment.SetEnvironmentVariable("DOTNET_ENVIRONMENT", IsInDebug ? "Development" : "Production");

        _mutex = new Mutex(true, App.Name, out var createdNew);
        if (!createdNew)
        {
            MessageBox.Show("Приложение уже запущено.", "Warning", MessageBoxButton.OK, MessageBoxImage.Warning);
            return;
        }

        try
        {
            App app = new();
            // app.InitializeComponent();
            app.Run();
        }
        catch (Exception ex)
        {
            Log.Fatal(ex, "Возникло исключение во время работы приложения.");
        }
    }

    public static IHostBuilder CreateHostBuilder(string[] args)
    {
        return Host
            .CreateDefaultBuilder(args)
            .ConfigureAppConfiguration((appConfig, _) =>
            {
                appConfig.HostingEnvironment.ApplicationName = App.Name;
                appConfig.HostingEnvironment.ContentRootPath = Environment.CurrentDirectory;
            })
            .UseSerilog()
            .ConfigureServices(ConfigureServices);
    }

    private static void ConfigureServices(HostBuilderContext context, IServiceCollection collection)
    {
        var connectionString = context.Configuration.GetConnectionString("Database");
        ArgumentException.ThrowIfNullOrWhiteSpace(connectionString);

        collection.AddDbContext<ApplicationDbContext>(e => e.UseNpgsql(connectionString));
        
        collection.AddSingleton<MainWindow>();
        collection.AddSingleton<MainWindowViewModel>();
        
        collection.AddTransient<SignInWindowViewModel>();
        collection.AddTransient<SignUpWindowViewModel>();

        collection.AddTransient<SignInWindow>();
        collection.AddTransient<SignUpWindow>();

        collection.AddSingleton<CatalogPageViewModel>();
        collection.AddMemoryCache();

        collection.AddTransient<ProductAddViewModel>();

        collection.AddSingleton<PurchasedProductsPageViewModel>();
        collection.AddSingleton<ProductsBasketPageViewModel>();

        collection.AddSingleton<ICurrentUserService, CurrentUserService>();
    }

    private static LoggerConfiguration GetLoggerConfiguration()
    {
        var loggerConfiguration = new LoggerConfiguration();
        
        if (IsInDebug)
        {
            loggerConfiguration.MinimumLevel.Debug();
            loggerConfiguration.WriteTo.Debug();
            return loggerConfiguration;
        }

        var logsDirectory = Path.Combine(Environment.CurrentDirectory, "logs");
        if (!Directory.Exists(logsDirectory))
        {
            Directory.CreateDirectory(logsDirectory);
        }

        var logFileFullPath = Path.Combine(logsDirectory, "log.txt");

        loggerConfiguration.MinimumLevel.Information();
        loggerConfiguration.WriteTo.File(logFileFullPath, rollingInterval: RollingInterval.Day);
        return loggerConfiguration;
    }
}