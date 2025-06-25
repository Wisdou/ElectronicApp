using FluentValidation;

namespace ElectronicsStore.WebApi.Requests;

public record SignInRequest(string Email, string Password);

public class SignInRequestValidator : AbstractValidator<SignInRequest>
{
    public SignInRequestValidator()
    {
        RuleFor(x => x.Email).NotEmpty().EmailAddress();
        RuleFor(x => x.Password).NotEmpty();
    }
}