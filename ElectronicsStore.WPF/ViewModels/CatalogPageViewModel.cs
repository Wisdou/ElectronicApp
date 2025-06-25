using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Windows;
using System.Windows.Data;
using System.Windows.Media.Imaging;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using CommunityToolkit.Mvvm.Messaging;
using ElectronicsStore.WPF.Data;
using ElectronicsStore.WPF.Infrastructure;
using ElectronicsStore.WPF.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.DependencyInjection;

namespace ElectronicsStore.WPF.ViewModels;

public partial class CatalogPageViewModel(IMemoryCache cache) : 
    ObservableRecipient, 
    IRecipient<ProductAddedMessage>,
    IRecipient<ProductPurchasedMessage>,
    IRefreshable,
    IRecipient<ProductModifiedMessage>
{
    public static readonly IEnumerable<EnumViewModel<ProductCategory>> Categories = Initialize();

    private static List<EnumViewModel<ProductCategory>> Initialize()
    {
        var list = Enum
            .GetValues<ProductCategory>()
            .Select(c => new EnumViewModel<ProductCategory>(c))
            .ToList();

        var first = new EnumViewModel<ProductCategory>(ProductCategory.Cameras)
        {
            DisplayName = "Все"
        };
        list.Insert(0, first);
        
        return list;
    }

    [ObservableProperty]
    private ObservableCollection<ProductViewModel>? _products;
    
    [ObservableProperty]
    private ICollectionView? _productsCollectionView;
    
    [ObservableProperty]
    private EnumViewModel<ProductCategory>? _selectedCategory;
    
    [ObservableProperty]
    private string? _searchText;
    
    public async Task RefreshAsync()
    {
        using var scope = App.Services.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

        var query = dbContext
            .Products
            .AsQueryable();

        if (SelectedCategory is not null && SelectedCategory.DisplayName != "Все")
        {
            query = query.Where(e => SelectedCategory.Value == e.Category);
        }
        
        var products = await query
            .OrderBy(e => e.Name)
            .ToListAsync();
        
        var vms = new ObservableCollection<ProductViewModel>();
        foreach (var item in products)
        {
            var img = cache.GetOrCreate<BitmapImage>(item.Id, _ =>
            {
                using var memoryStream = new System.IO.MemoryStream(item.Image);
                var image = new BitmapImage();
                image.BeginInit();
                image.CacheOption = BitmapCacheOption.OnLoad; 
                image.StreamSource = memoryStream;
                image.EndInit();
                    
                return image;
            });

            var vm = new ProductViewModel
            {
                Id = item.Id,
                Name = item.Name,
                Description = item.Description,
                Price = item.Price,
                Image = img,
                CategoryEnum = new EnumViewModel<ProductCategory>(item.Category),
                Quantity = item.AvailableQuantity,
            };

            vms.Add(vm);
        }
            
        Products = vms;
        
        if (Products is not null)
        {
            ProductsCollectionView = CollectionViewSource.GetDefaultView(Products);
            ProductsCollectionView.Filter = Filter;
        }
        SelectedCategory = Categories.First();
    }
    
    private bool Filter(object obj)
    {
        if (string.IsNullOrWhiteSpace(SearchText))
        {
            return true;
        }

        return obj is ProductViewModel pr && pr.Name.Contains(SearchText, StringComparison.InvariantCultureIgnoreCase);
    }
    
    [RelayCommand]
    private async Task OnCategorySelected(EnumViewModel<ProductCategory>? viewModel)
    {
        switch (viewModel)
        {
            case null:
                return;
            case {DisplayName: "Все"}:
                await RefreshAsync();
                return;
        }
        
        using var scope = App.Services.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

        var products = await dbContext
            .Products
            .OrderBy(e => e.Name)
            .Where(p => p.Category == viewModel.Value)
            .ToListAsync();

        var vms = new ObservableCollection<ProductViewModel>();
        foreach (var item in products)
        {
            var img = cache.GetOrCreate<BitmapImage>(item.Id, _ =>
            {
                using var memoryStream = new System.IO.MemoryStream(item.Image);
                var image = new BitmapImage();
                image.BeginInit();
                image.CacheOption = BitmapCacheOption.OnLoad; 
                image.StreamSource = memoryStream;
                image.EndInit();
                    
                return image;
            });

            var vm = new ProductViewModel
            {
                Id = item.Id,
                Name = item.Name,
                Description = item.Description,
                Price = item.Price,
                Image = img,
                CategoryEnum = new EnumViewModel<ProductCategory>(item.Category),
                Quantity = item.AvailableQuantity,
            };

            vms.Add(vm);
        }

        Products = vms;
        var view = CollectionViewSource.GetDefaultView(vms);
        view.Filter = Filter;
        ProductsCollectionView = view;
        SelectedCategory = viewModel;
    }

    [RelayCommand]
    private async Task DeleteProduct(ProductViewModel vm)
    {
        using var scope = App.Services.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        var currentUserService = scope.ServiceProvider.GetRequiredService<ICurrentUserService>();
        
        if (currentUserService.Get() is not {Role: Role.Admin})
        {
            return;
        }

        var dialogResult = MessageBox.Show("Вы уверены, что хотите удалить данный товар?", "Question", MessageBoxButton.YesNo, MessageBoxImage.Question);
        if (dialogResult != MessageBoxResult.Yes)
        {
            return;
        }

        var affectedRowsCount = await dbContext.Products.Where(e => e.Id == vm.Id).ExecuteDeleteAsync();
        if (affectedRowsCount > 0)
        {
            await RefreshAsync();
        }
    }

    [RelayCommand]
    private void Search()
    {
        ProductsCollectionView?.Refresh();
    }

    public void Receive(ProductAddedMessage message)
    {
        Application.Current.Dispatcher.Invoke(() =>
        {
            var pr = Products?.FirstOrDefault(e => e.Id == message.Product.Id);
            if (pr is not null && SelectedCategory?.Value == message.Product.Category)
            {
                Products?.Add(message.Product);
            }
        });
    }

    public void Receive(ProductPurchasedMessage message)
    {
        Application.Current.Dispatcher.Invoke(() =>
        {
            var pr = Products?.FirstOrDefault(e => e.Id == message.PurchasedProduct.Id);
            if (pr is not null)
            {
                pr.Quantity -= message.PurchasedProduct.Quantity;
            }
        });
    }

    public async void Receive(ProductModifiedMessage message)
    {
        await RefreshAsync();
    }
}

public partial class ProductViewModel : ObservableObject
{
    public required Guid Id { get; init; }
    
    public required string Name { get; init; }
    
    public required string Description { get; init; }
    
    public required decimal Price { get; init; }
    
    public ProductCategory Category => CategoryEnum.Value;
    
    public required EnumViewModel<ProductCategory> CategoryEnum { get; init; }
    
    public required BitmapImage? Image { get; init; }
    
    [ObservableProperty]
    [NotifyPropertyChangedFor(nameof(IsAbleToDoAnything))]
    private int _quantity;

    public bool IsAbleToDoAnything => Quantity > 0;
}