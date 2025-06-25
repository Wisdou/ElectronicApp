using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ElectronicsStore.WPF.Models;

public class Product
{
    public Guid Id { get; } = Guid.NewGuid();
    
    public required string Name { get; set; }
    
    public required string Description { get; set; }
    
    public required byte[] Image { get; set; }
    
    public required int AvailableQuantity { get; set; }
    
    public required decimal Price { get; set; }
    
    public required ProductCategory Category { get; set; }
}

public class ProductConfiguration : IEntityTypeConfiguration<Product>
{
    public void Configure(EntityTypeBuilder<Product> builder)
    {
        builder.HasKey(x => x.Id);
        
        builder.Property(e => e.Category).HasConversion(e => e.ToString(), e => Enum.Parse<ProductCategory>(e));
    }
}

public enum ProductCategory
{
    [Display(Name = "Мобильные телефоны")]
    Phones,

    [Display(Name = "Ноутбуки")]
    Laptops,

    [Display(Name = "Персональные компьютеры")]
    DesktopPCs,

    [Display(Name = "Моноблоки")]
    AllInOnePCs,

    [Display(Name = "Планшеты")]
    Tablets,

    [Display(Name = "Телевизоры")]
    TVs,

    [Display(Name = "Игровые приставки")]
    GameConsoles,

    [Display(Name = "Наушники")]
    Headphones,

    [Display(Name = "Смарт-часы")]
    SmartWatches,

    [Display(Name = "Фотоаппараты")]
    Cameras,

    [Display(Name = "Жесткие диски")]
    HardDrives,

    [Display(Name = "Твердотельные накопители (SSD)")]
    SSDs,

    [Display(Name = "Видеокарты")]
    GraphicsCards,

    [Display(Name = "Процессоры")]
    Processors,

    [Display(Name = "Материнские платы")]
    Motherboards,

    [Display(Name = "Оперативная память")]
    RAM,

    [Display(Name = "Микроволновые печи")]
    MicrowaveOvens,

    [Display(Name = "Пылесосы")]
    VacuumCleaners,

    [Display(Name = "Принтеры")]
    Printers,

    [Display(Name = "Сканеры")]
    Scanners,

    [Display(Name = "Электронные книги")]
    EReaders,

    [Display(Name = "Внешние аккумуляторы")]
    PowerBanks,

    [Display(Name = "Зарядные устройства")]
    Chargers,

    [Display(Name = "Чехлы для телефонов")]
    PhoneCases
}