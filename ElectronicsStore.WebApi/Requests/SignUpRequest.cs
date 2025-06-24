﻿using FluentValidation;

namespace ElectronicsStore.WebApi.Requests;

public record SignUpRequest(string Email, string Password);

public class SignUpRequestValidator : AbstractValidator<SignUpRequest>
{
    public SignUpRequestValidator()
    {
        RuleFor(x => x.Email)
            .NotEmpty()
            .EmailAddress();

        RuleFor(e => e.Password)
            .NotEmpty()
            .MinimumLength(6);
    }
}