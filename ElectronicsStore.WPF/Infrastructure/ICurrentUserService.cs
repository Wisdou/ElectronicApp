using ElectronicsStore.WPF.Models;

namespace ElectronicsStore.WPF.Infrastructure;

public interface ICurrentUserService
{ 
    void Set(User? user);
    
    CurrentUser? Get();
}

public class CurrentUserService : ICurrentUserService
{
    private CurrentUser? _currentUser;
    
    public void Set(User? user)
    {
        Interlocked.Exchange(ref _currentUser, user is null ? null : new CurrentUser(user.Id, user.Email, user.Role));
    }

    public CurrentUser? Get() => _currentUser;
}

public record CurrentUser(Guid Id, string Email, Role Role);