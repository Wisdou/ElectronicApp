using System.Collections.ObjectModel;
using System.Windows;
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

public partial class ProductsBasketPageViewModel(IMemoryCache cache) : ObservableRecipient, IRefreshable, IRecipient<ProductAddedToBasketMessage>
{
    [ObservableProperty]
    private ObservableCollection<BasketProductViewModel>? _products;

    public decimal TotalBasketAmount => Products?.Where(e => e.IsSelected).Sum(p => p.TotalAmount) ?? 0;
    
    public async Task RefreshAsync()
    {
        using var scope = App.Services.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        var currentUserService = scope.ServiceProvider.GetRequiredService<ICurrentUserService>();
        
        if (currentUserService.Get() is not { } currentUser)
        {
            return;
        }

        var result = await dbContext
            .ProductBaskets
            .Include(p => p.Product)
            .Where(e => e.Basket.UserId == currentUser.Id)
            .OrderBy(e => e.Product.Name)
            .ToListAsync();

        var vms = new ObservableCollection<BasketProductViewModel>();
        
        foreach (var item in result)
        {
            var img = cache.GetOrCreate<BitmapImage>(item.ProductId, _ =>
            {
                using var memoryStream = new System.IO.MemoryStream(item.Product.Image);
                var image = new BitmapImage();
                image.BeginInit();
                image.CacheOption = BitmapCacheOption.OnLoad;
                image.StreamSource = memoryStream;
                image.EndInit();

                return image;
            });

            var vm = new BasketProductViewModel
            {
                Id = item.ProductId,
                Category = item.Product.Category,
                Name = item.Product.Name,
                Price = item.Product.Price,
                Quantity = item.Quantity,
                Image = img
            };

            vms.Add(vm);
        }

        Products = vms;
    }

    [RelayCommand]
    private void OnSelectionChanged()
    {
        OnPropertyChanged(nameof(TotalBasketAmount));
    }

    [RelayCommand]
    private async Task ProductRemoveFromBasket(BasketProductViewModel? basketProductViewModel)
    {
        if (basketProductViewModel is null)
        {
            return;
        }

        using var scope = App.Services.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        
        var currentUserService = scope.ServiceProvider.GetRequiredService<ICurrentUserService>();
        
        if (currentUserService.Get() is not { } currentUser)
        {
            return;
        }
        
        var item = await dbContext.ProductBaskets.FirstOrDefaultAsync(e => e.ProductId == basketProductViewModel.Id && e.Basket.UserId == currentUser.Id);
        if (item is null)
        {
            return;
        }
        
        dbContext.ProductBaskets.Remove(item);
        await dbContext.SaveChangesAsync();
        
        if (Products is not null)
        {
            var productToRemove = Products.FirstOrDefault(p => p.Id == basketProductViewModel.Id);
            if (productToRemove is not null)
            {
                Products.Remove(productToRemove);
            }
        }
    }

    [RelayCommand]
    private async Task BuyBasket()
    {
        var selectedProducts = Products?.Where(e => e.IsSelected).ToList();
        if (BuyBasketCommand.IsRunning || Products is null || Products.Count == 0 || selectedProducts is not {Count: > 0})
        {
            return;
        }

        using var scope = App.Services.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        
        var currentUserService = scope.ServiceProvider.GetRequiredService<ICurrentUserService>();
        
        if (currentUserService.Get() is not { } currentUser)
        {
            return;
        }
        
        var items = await dbContext
            .ProductBaskets
            .Where(e => e.Basket.UserId == currentUser.Id && selectedProducts.Select(o => o.Id).Contains(e.ProductId))
            .Include(e => e.Product)
            .ToListAsync();

        foreach (var item in items)
        {
            if (item.Product.AvailableQuantity < item.Quantity)
            {
                MessageBox.Show(
                    $"Недостаточно товара \"{item.Product.Name}\". Доступно: {item.Product.AvailableQuantity}.",
                    "Ошибка",
                    MessageBoxButton.OK,
                    MessageBoxImage.Error
                );
                return;
            }
        }

        var vms = new List<PurchasedProductViewModel>();
        foreach (var item in items)
        {
            var purchasedProduct = new PurchasedProduct
            {
                ProductId = item.ProductId,
                UserId = currentUser.Id,
                Quantity = item.Quantity,
                PurchaseDateTime = DateTimeOffset.UtcNow,
            };

            item.Product.AvailableQuantity -= item.Quantity;

            dbContext.PurchasedProducts.Add(purchasedProduct);
            dbContext.ProductBaskets.Remove(item);

            var img = cache.GetOrCreate<BitmapImage>(item.ProductId, _ =>
            {
                using var memoryStream = new System.IO.MemoryStream(item.Product.Image);
                var image = new BitmapImage();
                image.BeginInit();
                image.CacheOption = BitmapCacheOption.OnLoad;
                image.StreamSource = memoryStream;
                image.EndInit();

                return image;
            });

            var vm = new PurchasedProductViewModel
            {
                Id = item.Product.Id,
                Name = item.Product.Name,
                Price = item.Product.Price,
                Quantity = item.Quantity,
                Category = item.Product.Category,
                PurchaseDateTime = purchasedProduct.PurchaseDateTime,
                UserEmail = currentUser.Email,
                Image = img,
            };

            vms.Add(vm);
        }

        await dbContext.SaveChangesAsync();

        foreach (var vm in vms)
        {
            Messenger.Send(new ProductPurchasedMessage(vm));
        }
        
        foreach (var vm in selectedProducts)
        {
            Products.Remove(vm);
        }
        
        Messenger.Send(new CloseDialogRequest());
        MessageBox.Show("Все товары успешно куплены!", "Информация", MessageBoxButton.OK, MessageBoxImage.Information);
    }

    public void Receive(ProductAddedToBasketMessage message)
    {
        Application.Current.Dispatcher.Invoke(() =>
        {
            if (Products is null)
            {
                return;
            }

            var pr = Products.FirstOrDefault(e => e.Id == message.Product.Id);
            if (pr is null)
            {
                Products.Add(message.Product);
            }
            else
            {
                pr.Quantity = message.Product.Quantity;
            }
        });
    }
}


public partial class BasketProductViewModel : ObservableObject
{
    public required Guid Id { get; init; }
    
    public required ProductCategory Category { get; init; }
    
    public required string Name { get; init; }
    
    [ObservableProperty]
    private int _quantity;
    
    public required decimal Price { get; init; }

    public decimal TotalAmount => Quantity * Price;
    
    [ObservableProperty] 
    private BitmapImage? _image;

    [ObservableProperty] 
    private bool _isSelected;
}