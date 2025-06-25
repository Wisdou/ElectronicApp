using System.Windows;
using ElectronicsStore.WPF.ViewModels;

namespace ElectronicsStore.WPF.Views;

public partial class SignInWindow : Window
{
    public SignInWindow()
    {
        InitializeComponent();
    }
    
    private void PasswordBoxControl_PasswordChanged(object sender, RoutedEventArgs e)
    {
        if (DataContext is SignInWindowViewModel viewModel)
        {
            viewModel.Password = PasswordBoxControl.Password;
        }
    }
}