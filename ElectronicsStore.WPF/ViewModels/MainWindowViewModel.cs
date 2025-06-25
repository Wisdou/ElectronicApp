using System.IO;
using System.Reflection;
using System.Windows;
using ClosedXML.Excel;
using ClosedXML.Report;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using CommunityToolkit.Mvvm.Messaging;
using ElectronicsStore.WPF.Data;
using ElectronicsStore.WPF.Infrastructure;
using ElectronicsStore.WPF.Models;
using ElectronicsStore.WPF.Views;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace ElectronicsStore.WPF.ViewModels;

public partial class MainWindowViewModel : ObservableRecipient, IRecipient<CloseDialogRequest>
{
    [ObservableProperty]
    [NotifyPropertyChangedFor(nameof(IsSignInButtonVisible))]
    [NotifyPropertyChangedFor(nameof(IsNotSignInButtonVisible))]
    private CurrentUser? _currentUser; 
    
    public bool IsSignInButtonVisible => CurrentUser is null;
    
    public bool IsNotSignInButtonVisible => CurrentUser is not null;
    
    public CatalogPageViewModel CatalogPageViewModel { get; }
    
    public PurchasedProductsPageViewModel PurchasedProductsPageViewModel { get; }
    
    public ProductsBasketPageViewModel ProductsBasketPageViewModel { get; }

    [ObservableProperty]
    private ObservableObject? _selectedPage;
    
    [ObservableProperty]
    private bool _isProductAddingDialogShowing;
    
    [ObservableProperty]
    private bool _isProductEditingDialogShowing;
    
    [ObservableProperty]
    private bool _isProductBuyingDialogShowing;
    
    [ObservableProperty]
    private bool _isProductAddingToBasketDialogShowing;

    [ObservableProperty] 
    private ProductAddViewModel? _productAddViewModel;
    
    [ObservableProperty] 
    private ProductEditViewModel? _productEditViewModel;
    
    [ObservableProperty]
    private ProductBuyViewModel? _productBuyViewModel;
    
    [ObservableProperty]
    private ProductAddToBasketViewModel? _productAddToBasketViewModel;

    public MainWindowViewModel(
        CatalogPageViewModel catalogPageViewModel, 
        PurchasedProductsPageViewModel purchasedProductsPageViewModel, 
        ProductsBasketPageViewModel productsBasketPageViewModel)
    {
        IsActive = true;
        CatalogPageViewModel = catalogPageViewModel;
        PurchasedProductsPageViewModel = purchasedProductsPageViewModel;
        ProductsBasketPageViewModel = productsBasketPageViewModel;
        CatalogPageViewModel.IsActive = true;
        PurchasedProductsPageViewModel.IsActive = true;
        ProductsBasketPageViewModel.IsActive = true;
    }

    [RelayCommand]
    private async Task OnPageChanged(ObservableObject? page)
    {
        switch (page)
        {
            case null:
                return;
            case IRefreshable refreshablePage:
                await refreshablePage.RefreshAsync();
                break;
        }

        SelectedPage = page;
    }

    [RelayCommand]
    private void OpenProductAddDialog()
    {
        var currentUserService = App.Services.GetRequiredService<ICurrentUserService>();
        if (currentUserService.Get() is null)
        {
            var vm1 = App.Services.GetRequiredService<SignInWindowViewModel>();
            var window = App.Services.GetRequiredService<SignInWindow>();
            
            window.DataContext = vm1;
            window.ShowDialog();
        }
        
        var vm = App.Services.GetRequiredService<ProductAddViewModel>();
        IsProductAddingDialogShowing = true;
        ProductAddViewModel = vm;
    }

    [RelayCommand]
    private async Task AddProductsFromExcel()
    {
        var fileDialog = new Microsoft.Win32.OpenFileDialog()
        {
            Filter = "Excel files (*.xlsx)|*.xlsx",
            Multiselect = false
        };

        var dialogResult = fileDialog.ShowDialog();
        if (dialogResult is not true)
        {
            return;
        }

        using var scope = App.Services.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        var currUserService = App.Services.GetRequiredService<ICurrentUserService>();

        if (currUserService.Get() is not { Role: Role.Admin })
        {
            return;
        }
        
        using var workbook = new XLWorkbook(fileDialog.FileName);
        var worksheet = workbook.Worksheet(1);

        foreach (var row in worksheet.RowsUsed())
        {
            var name = row.Cell(1).GetValue<string>();
            var description = row.Cell(2).GetValue<string>();
            var category = row.Cell(3).GetValue<string>();
            var price = row.Cell(4).GetValue<decimal>();
            var quantity = row.Cell(5).GetValue<int>();
            var imagePath = row.Cell(6).GetValue<string>().Replace("\"", string.Empty);

            if (string.IsNullOrWhiteSpace(name) || string.IsNullOrWhiteSpace(description) ||
                string.IsNullOrWhiteSpace(category) || price <= 0 || quantity <= 0 ||
                string.IsNullOrWhiteSpace(imagePath))
            {
                continue;
            }

            byte[] imageBytes = await File.ReadAllBytesAsync(imagePath);

            var product = new Product
            {
                Name = name,
                Description = description,
                Category = Enum.Parse<ProductCategory>(category),
                Price = price,
                AvailableQuantity = quantity,
                Image = imageBytes
            };

            dbContext.Products.Add(product);
        }

        await dbContext.SaveChangesAsync();
        await CatalogPageViewModel.RefreshAsync();
    }
    
    [RelayCommand]
    private void OpenProductAddToBasketDialog(ProductViewModel? product)
    {
        if (product is null)
        {
            return;
        }
        
        var currentUserService = App.Services.GetRequiredService<ICurrentUserService>();
        if (currentUserService.Get() is null)
        {
            var vm1 = App.Services.GetRequiredService<SignInWindowViewModel>();
            var window = App.Services.GetRequiredService<SignInWindow>();
            
            window.DataContext = vm1;
            window.ShowDialog();
        }
        
        var vm = new ProductAddToBasketViewModel()
        {
            ProductId = product.Id,
        };
        
        IsProductAddingToBasketDialogShowing = true;
        ProductAddToBasketViewModel = vm;
    }

    [RelayCommand]
    private void EditProduct(ProductViewModel? product)
    {
        if (product is null)
        {
            return;
        }
        
        var currentUserService = App.Services.GetRequiredService<ICurrentUserService>();
        if (currentUserService.Get() is not { Role: Role.Admin })
        {
            return;
        }

        var vm = new ProductEditViewModel()
        {
            ProductId = product.Id,
            Category = product.CategoryEnum,
            Name = product.Name,
            Description = product.Description,
            Price = product.Price,
            Quantity = product.Quantity,
        };
        
        ProductEditViewModel = vm;
        IsProductEditingDialogShowing = true;
    }
    
    [RelayCommand]
    private void OpenProductBuyDialog(ProductViewModel? product)
    {
        if (product is null)
        {
            return;
        }
        
        var currentUserService = App.Services.GetRequiredService<ICurrentUserService>();
        if (currentUserService.Get() is null)
        {
            var vm1 = App.Services.GetRequiredService<SignInWindowViewModel>();
            var window = App.Services.GetRequiredService<SignInWindow>();
            
            window.DataContext = vm1;
            window.ShowDialog();
        }

        var vm = new ProductBuyViewModel()
        {
            ProductId = product.Id,
        };
        ProductBuyViewModel = vm;
        IsProductBuyingDialogShowing = true;
    }

    [RelayCommand]
    private static void OpenSignIn()
    {
        var vm = App.Services.GetRequiredService<SignInWindowViewModel>();
        var window = App.Services.GetRequiredService<SignInWindow>();
        
        window.DataContext = vm;
        
        window.ShowDialog();
    }

    [RelayCommand]
    private static async Task GeneratePurchasingReport()
    {
        var currentUserService = App.Services.GetRequiredService<ICurrentUserService>();
        if (currentUserService.Get() is not { Role: Role.Admin })
        {
            return;
        }
        
        var fileDialog = new Microsoft.Win32.SaveFileDialog()
        {
            Filter = "Excel files (*.xlsx)|*.xlsx",
        };

        var dialogResult = fileDialog.ShowDialog();
        if (dialogResult is not true)
        {
            return;
        }
        
        using var scope = App.Services.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        
        var items = await dbContext
            .PurchasedProducts
            .GroupBy(e => e.Product)
            .Select(e => new
            {
                e.Key.Name,
                e.Key.Description,
                PurchasedCount = e.Sum(o => o.Quantity),
                PurchasedAmount = e.Key.Price * e.Sum(o => o.Quantity),
            })
            .ToListAsync();

        var data = new
        {
            Items = items,
        };

        await using var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream("ElectronicsStore.WPF.ШаблонОтчетаПоПродажам.xlsx");
        using var template = new XLTemplate(stream);

        template.AddVariable(data);
        template.Generate();
        
        template.Workbook
            .Worksheets
            .First()
            .ColumnsUsed()
            .AdjustToContents();
        
        template.SaveAs(fileDialog.FileName);
        MessageBox.Show("Отчет успешно создан", "Information", MessageBoxButton.OK, MessageBoxImage.Information);
    }
    
    [RelayCommand]
    private static async Task GenerateAvailableCountReport()
    {
        var currentUserService = App.Services.GetRequiredService<ICurrentUserService>();
        if (currentUserService.Get() is not { Role: Role.Admin })
        {
            return;
        }
        
        var fileDialog = new Microsoft.Win32.SaveFileDialog()
        {
            Filter = "Excel files (*.xlsx)|*.xlsx",
        };

        var dialogResult = fileDialog.ShowDialog();
        if (dialogResult is not true)
        {
            return;
        }
        
        using var scope = App.Services.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        
        var items = await dbContext
            .Products
            .Select(e => new
            {
                e.Name,
                e.Description, 
                e.AvailableQuantity,
            })
            .ToListAsync();

        var data = new
        {
            Items = items,
        };

        await using var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream("ElectronicsStore.WPF.ШаблонОтчетаПоОстаткам.xlsx");
        using var template = new XLTemplate(stream);

        template.AddVariable(data);
        template.Generate();
        
        template.Workbook
            .Worksheets
            .First()
            .ColumnsUsed()
            .AdjustToContents();
        
        template.SaveAs(fileDialog.FileName);
        MessageBox.Show("Отчет успешно создан", "Information", MessageBoxButton.OK, MessageBoxImage.Information);
    }

    public void Receive(CloseDialogRequest message)
    {
        Application.Current.Dispatcher.Invoke(() =>
        {
            ProductBuyViewModel = null;
            IsProductBuyingDialogShowing = false;
            ProductAddViewModel = null;
            IsProductAddingDialogShowing = false;
            IsProductAddingToBasketDialogShowing = false;
            ProductAddToBasketViewModel = null;
            ProductEditViewModel = null;
            IsProductEditingDialogShowing = false;
        });
    }
}