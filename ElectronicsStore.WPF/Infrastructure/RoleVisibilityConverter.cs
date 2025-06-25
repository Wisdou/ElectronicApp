using System.Globalization;
using System.Windows;
using System.Windows.Data;
using ElectronicsStore.WPF.Models;

namespace ElectronicsStore.WPF.Infrastructure;

public class RoleVisibilityConverter : IValueConverter
{
    public object Convert(object? value, Type targetType, object? parameter, CultureInfo culture)
    {
        if (value is CurrentUser user && parameter is Role role1 && user.Role == role1)
        {
            return Visibility.Visible;
        }
        
        
        if (value is Role role && parameter is Role roleEnumValue && role == roleEnumValue)
        {
            return Visibility.Visible;
        }

        return Visibility.Collapsed;
    }

    public object ConvertBack(object? value, Type targetType, object? parameter, CultureInfo culture)
    {
        throw new NotImplementedException();
    }
}