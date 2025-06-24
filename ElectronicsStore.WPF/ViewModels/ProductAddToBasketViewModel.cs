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

public partial class ProductAddToBasketViewModel : ObservableRecipient
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
        var currentUserService = scope.ServiceProvider.GetRequiredService<ICurrentUserService>();
        var cache = scope.ServiceProvider.GetRequiredService<IMemoryCache>();

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
        
        var targetBasket = await dbContext.Baskets.FirstOrDefaultAsync(e => e.UserId == currentUser.Id);

        if (targetBasket is null)
        {
            targetBasket = new Basket() { UserId = currentUser.Id };
            dbContext.Baskets.Add(targetBasket);
        }

        var basketItem = await dbContext.ProductBaskets.FirstOrDefaultAsync(e => e.ProductId == ProductId && e.BasketId == targetBasket.Id);
        if (basketItem is null)
        {
            basketItem = new ProductBasket
            {
                ProductId = ProductId,
                BasketId = targetBasket.Id,
                Quantity = Quantity,
            };
            dbContext.ProductBaskets.Add(basketItem);
        }
        else
        {
            basketItem.Quantity += Quantity;
        }
        
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
        
        var vm = new BasketProductViewModel()
        {
            Id = targetProduct.Id,
            Name = targetProduct.Name,
            Price = targetProduct.Price,
            Quantity = basketItem.Quantity,
            Category = targetProduct.Category,
            Image = img,
        };
        
        Messenger.Send(new ProductAddedToBasketMessage(vm));
        Messenger.Send(new CloseDialogRequest());
    }
    
    [RelayCommand]
    private void Close()
    {
        Messenger.Send(new CloseDialogRequest());
    }

    private bool CanConfirm() => Quantity > 0;
}