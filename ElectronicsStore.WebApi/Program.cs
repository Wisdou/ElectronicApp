using System.Reflection;
using ElectronicsStore.WebApi.Controllers;
using ElectronicsStore.WebApi.DAL;
using ElectronicsStore.WebApi.Models;
using FluentValidation;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Scalar.AspNetCore;
using SharpGrip.FluentValidation.AutoValidation.Mvc.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// NOTE: Keys stored in unencrypted form.
builder.Services.AddDataProtection()
    .PersistKeysToFileSystem(new DirectoryInfo("/app/data-protection-keys"))
    .SetApplicationName("ElectronicsStore.WebApi");

builder.Services.AddFluentValidationAutoValidation();
builder.Services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
builder.Services.AddAuthentication(e => e.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(CookieAuthenticationDefaults.AuthenticationScheme, o =>
    {
        o.Events = new CookieAuthenticationEvents
        {
            OnRedirectToAccessDenied = e =>
            {
                e.Response.StatusCode = 403;
                return Task.CompletedTask;
            },
            
            OnRedirectToLogin = e =>
            {
                e.Response.StatusCode = 401;
                return Task.CompletedTask;
            }
        };
    });

var connectionString = builder.Configuration.GetConnectionString("Database");
ArgumentException.ThrowIfNullOrWhiteSpace(connectionString);

builder.Services.AddDbContext<ApplicationDbContext>(e => e.UseNpgsql(connectionString).UseSeeding((ctx, _) =>
{
    const string firstUserPwd = "Admin_123#";
    
    var user = new User
    {
        Id = Guid.Parse("4f47b4e0-71ae-4c50-8b09-7402a06be491"),
        PasswordHash = BCrypt.Net.BCrypt.HashPassword(firstUserPwd),
        Role = Role.Admin,
        Email = "admin@gmail.com",
        NormalizedEmail = "ADMIN@GMAIL.COM"
    };

    if (ctx.Set<User>().Any(u => u.Id == user.Id))
    {
        return;
    }
    
    ctx.Set<User>().Add(user);
    ctx.SaveChanges();
}));

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).
    AddJwtBearer(options =>
    {
        options.RequireHttpsMetadata = false;
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,

            ValidIssuer = JwtOptions.ISSUER,

            ValidateAudience = true,

            ValidAudience = JwtOptions.AUDIENCE,

            ValidateLifetime = true,

            IssuerSigningKey = JwtOptions.GetSymmetricSecurityKey(),

            ValidateIssuerSigningKey = true,
        };
    });

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    dbContext.Database.Migrate();
}

app.MapScalarApiReference();

app.UseCors(e => e
    .WithOrigins(app.Configuration.GetSection("AllowedOrigins").Get<string[]>() ?? throw new InvalidOperationException())
    .AllowAnyMethod()
    .AllowAnyHeader()
    .AllowCredentials());

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();