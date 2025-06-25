using System.IO;
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

public partial class ProductEditViewModel : ObservableRecipient
{
    public required Guid ProductId { get; init; }
    
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
        var memoryCache = scope.ServiceProvider.GetRequiredService<IMemoryCache>();
        
        var target = await dbContext.Products.FirstAsync(e => e.Id == ProductId);
        target.Price = Price;
        target.Name = Name!;
        target.Description = Description!;
        target.Category = Category!.Value!;
        if (!string.IsNullOrWhiteSpace(ImagePath))
        {
            target.Image = await File.ReadAllBytesAsync(ImagePath);
            memoryCache.Remove(ProductId);
        }

        target.AvailableQuantity = Quantity;

        await dbContext.SaveChangesAsync();
        Messenger.Send(new CloseDialogRequest());
        Messenger.Send(new ProductModifiedMessage());
    }

    private bool CanConfirm() => !string.IsNullOrWhiteSpace(Name) &&
                                 !string.IsNullOrWhiteSpace(Description) &&
                                 Category is not null &&
                                 Quantity > 0 &&
                                 Price > 0;
    
    [RelayCommand]
    private void Close()
    {
        Messenger.Send(new CloseDialogRequest());
    }
}

public record ProductModifiedMessage();