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

public partial class ProductBuyViewModel : ObservableRecipient
{
    public required Guid ProductId { get; init; }
    
    [ObservableProperty]
    [NotifyCanExecuteChangedFor(nameof(ConfirmCommand))]
    private int _quantity;

    [RelayCommand(CanExecute = nameof(CanConfirm))]
    private async Task Confirm()
    {
        if (ConfirmCommand.IsRunning)
        {
            return;
        }

        using var scope = App.Services.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        var cache = scope.ServiceProvider.GetRequiredService<IMemoryCache>();
        var currentUserService = scope.ServiceProvider.GetRequiredService<ICurrentUserService>();
        
        if (currentUserService.Get() is not { } currentUser)
        {
            return;
        }
        
        var targetProduct = await dbContext.Products.FirstAsync(e => e.Id == ProductId);
        if (targetProduct.AvailableQuantity < Quantity)
        {
            MessageBox.Show("Выбранное кол-во превышает остаток.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            return;
        }

        var purchasedProduct = new PurchasedProduct
        {
            ProductId = ProductId,
            UserId = currentUser.Id,
            Quantity = Quantity,
            PurchaseDateTime = DateTimeOffset.UtcNow,
        };

        targetProduct.AvailableQuantity -= Quantity;
        
        dbContext.PurchasedProducts.Add(purchasedProduct);
        await dbContext.SaveChangesAsync();
        
        var img = cache.GetOrCreate<BitmapImage>(ProductId, _ =>
        {
            using var memoryStream = new System.IO.MemoryStream(targetProduct.Image);
            var image = new BitmapImage();
            image.BeginInit();
            image.CacheOption = BitmapCacheOption.OnLoad; 
            image.StreamSource = memoryStream;
            image.EndInit();
                    
            return image;
        });
        
        var vm = new PurchasedProductViewModel
        {
            Id = targetProduct.Id,
            Name = targetProduct.Name,
            Price = targetProduct.Price,
            Quantity = Quantity,
            Category = targetProduct.Category,
            PurchaseDateTime = purchasedProduct.PurchaseDateTime,
            UserEmail = currentUser.Email,
            Image = img,
        };
        
        Messenger.Send(new ProductPurchasedMessage(vm));
        Messenger.Send(new CloseDialogRequest());
    }
    
    [RelayCommand]
    private void Close()
    {
        Messenger.Send(new CloseDialogRequest());
    }

    private bool CanConfirm() => Quantity > 0;
}