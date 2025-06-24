using System.IO;
using System.Windows.Media.Imaging;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using CommunityToolkit.Mvvm.Messaging;
using ElectronicsStore.WPF.Data;
using ElectronicsStore.WPF.Infrastructure;
using ElectronicsStore.WPF.Models;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.DependencyInjection;

namespace ElectronicsStore.WPF.ViewModels;

public partial class ProductAddViewModel(IMemoryCache memoryCache) : ObservableRecipient
{
    [ObservableProperty]
    [NotifyCanExecuteChangedFor(nameof(ConfirmCommand))]
    private string? _name;
    
    [ObservableProperty]
    [NotifyCanExecuteChangedFor(nameof(ConfirmCommand))]
    private string? _description;
    
    [ObservableProperty]
    [NotifyCanExecuteChangedFor(nameof(ConfirmCommand))]
    private EnumViewModel<ProductCategory>? _category;

    [ObservableProperty]
    private string? _imagePath;
    
    [ObservableProperty]
    [NotifyCanExecuteChangedFor(nameof(ConfirmCommand))]
    private decimal _price;
    
    [ObservableProperty]
    [NotifyCanExecuteChangedFor(nameof(ConfirmCommand))]
    private int _quantity;
    
    [RelayCommand]
    private void SelectImage()
    {
        const string title = "Выберите файлы:";
        const string filter = "Files|*.png;*.jpg;*.jpeg";

        var fileDialog = new Microsoft.Win32.OpenFileDialog
        {
            Title = title,
            RestoreDirectory = true,
            Multiselect = false,
            Filter = filter,
        };

        fileDialog.ShowDialog();
        ImagePath = fileDialog.FileName;
    }
    
    [RelayCommand(CanExecute = nameof(CanConfirm))]
    private async Task Confirm()
    {
        if (ConfirmCommand.IsRunning)
        {
            return;
        }
        
        using var scope = App.Services.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

        var product = new Product
        {
            Name = Name!,
            Description = Description!,
            Category = Category!.Value,
            Price = Price,
            AvailableQuantity = Quantity,
            Image = await File.ReadAllBytesAsync(ImagePath!),
        };
        
        dbContext.Products.Add(product);
        await dbContext.SaveChangesAsync();

        using var memoryStream = new MemoryStream(product.Image);
        var image = new BitmapImage();
        image.BeginInit();
        image.CacheOption = BitmapCacheOption.OnLoad; 
        image.StreamSource = memoryStream;
        image.EndInit();
        
        var vm = new ProductViewModel
        {
            Id = product.Id,
            Name = product.Name,
            Description = product.Description,
            Price = product.Price,
            Image = image,
            CategoryEnum = new EnumViewModel<ProductCategory>(product.Category),
            Quantity = product.AvailableQuantity,
        };
        
        memoryCache.Set(product.Id, image);
        
        Messenger.Send(new ProductAddedMessage(vm));
        Messenger.Send(new CloseDialogRequest());
    }

    private bool CanConfirm() => !string.IsNullOrWhiteSpace(Name) &&
                                  !string.IsNullOrWhiteSpace(Description) &&
                                  !string.IsNullOrWhiteSpace(ImagePath) &&
                                  Category is not null &&
                                  Quantity > 0 &&
                                  Price > 0;
    
    [RelayCommand]
    private void Close()
    {
        Messenger.Send(new CloseDialogRequest());
    }
}