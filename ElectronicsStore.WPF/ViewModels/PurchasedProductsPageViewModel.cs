using System.Collections.ObjectModel;
using System.Windows;
using System.Windows.Media.Imaging;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Messaging;
using ElectronicsStore.WPF.Data;
using ElectronicsStore.WPF.Infrastructure;
using ElectronicsStore.WPF.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.DependencyInjection;

namespace ElectronicsStore.WPF.ViewModels;

public partial class PurchasedProductsPageViewModel(IMemoryCache cache) : 
    ObservableRecipient, 
    IRefreshable,
    IRecipient<ProductPurchasedMessage>
{
    [ObservableProperty]
    private ObservableCollection<PurchasedProductViewModel>? _products;
    
    public async Task RefreshAsync()
    {
        using var scope = App.Services.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        var currentUserService = scope.ServiceProvider.GetRequiredService<ICurrentUserService>();
        
        if (currentUserService.Get() is not { } currentUser)
        {
            return;
        }

        var query = dbContext.PurchasedProducts.AsQueryable();

        if (currentUser.Role == Role.User)
        {
            query = query.Where(e => e.UserId == currentUser.Id);
        }

        var result = await query
            .Include(p => p.Product)
            .Include(e => e.User)
            .OrderByDescending(e => e.PurchaseDateTime)
            .ToListAsync();

        var vms = new ObservableCollection<PurchasedProductViewModel>();
        foreach (var item in result)
        {
            var img = cache.GetOrCreate<BitmapImage>(item.Id, _ =>
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
                Id = item.Id,
                Category = item.Product.Category,
                Name = item.Product.Name,
                Price = item.Product.Price,
                Quantity = item.Quantity,
                PurchaseDateTime = item.PurchaseDateTime,
                UserEmail = item.User.Email,
                Image = img
            };
            
            vms.Add(vm);
        }
        
        Products = vms;
    }

    public void Receive(ProductPurchasedMessage message)
    {
        Application.Current.Dispatcher.Invoke(() =>
        {
            Products?.Add(message.PurchasedProduct);
        });
    }
}

public partial class PurchasedProductViewModel : ObservableObject
{
    public required Guid Id { get; init; }
    
    public required DateTimeOffset PurchaseDateTime { get; init; }
    
    public required ProductCategory Category { get; init; }
    
    public required string Name { get; init; }
    
    public required int Quantity { get; init; }
    
    public required decimal Price { get; init; }

    public required string UserEmail { get; init; }
    
    public decimal TotalAmount => Quantity * Price;
    
    public string DisplayDateTime => PurchaseDateTime.ToLocalTime().ToString("dd.MM.yyyy HH:mm");
    
    [ObservableProperty] 
    private BitmapImage? _image;
}