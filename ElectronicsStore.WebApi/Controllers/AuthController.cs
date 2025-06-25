using DocumentFormat.OpenXml.Spreadsheet;
using ElectronicsStore.WebApi.DAL;
using ElectronicsStore.WebApi.Models;
using ElectronicsStore.WebApi.Requests;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Principal;

namespace ElectronicsStore.WebApi.Controllers;

[Route("api/[controller]/[action]")]
[ApiController]
public class AuthController(ApplicationDbContext dbContext) : Controller
{
    [HttpPost]
    public async Task<IActionResult> SignIn(SignInRequest request)
    {
        var user = await dbContext
            .Users
            .FirstOrDefaultAsync(e => e.NormalizedEmail == request.Email.ToUpper());

        if (user is null || !BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash))
        {
            return BadRequest("Неверный логин или пароль.");
        }

        var now = DateTime.UtcNow;

        var claims = new List<Claim>
        {
            new ("UserId", user.Id.ToString()),
            new (ClaimTypes.Email, user.Email),
            new (ClaimTypes.Role, user.Role.ToString()),
        };

        var jwt = new JwtSecurityToken(
                        issuer: JwtOptions.ISSUER,
                        audience: JwtOptions.AUDIENCE,
                        notBefore: now,
                        claims: claims,
                        expires: now.Add(TimeSpan.FromMinutes(JwtOptions.LIFETIME)),
                        signingCredentials: new SigningCredentials(JwtOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));

        var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

        var response = new
        {
            access_token = encodedJwt,
            username = user.Email,
            userid = user.Id,
            role = user.Role
        };
        return Json(response);
    }

    [HttpPost]
    public async Task<IActionResult> SignUp(SignUpRequest request)
    {
        var normalizedEmail = request.Email.Trim().ToUpper();
        if (await dbContext.Users.AnyAsync(e => e.NormalizedEmail == normalizedEmail))
        {
            return BadRequest("Email занят.");
        }

        var user = new User
        {
            Id = Guid.NewGuid(),
            Email = request.Email.Trim(),
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(request.Password),
            Role = Role.User,
            NormalizedEmail = normalizedEmail,
        };
        
        dbContext.Users.Add(user);
        await dbContext.SaveChangesAsync();

        var now = DateTime.UtcNow;

        var claims = new List<Claim>
        {
            new ("UserId", user.Id.ToString()),
            new (ClaimTypes.Email, user.Email),
            new (ClaimTypes.Role, user.Role.ToString()),
        };

        var jwt = new JwtSecurityToken(
                        issuer: JwtOptions.ISSUER,
                        audience: JwtOptions.AUDIENCE,
                        notBefore: now,
                        claims: claims,
                        expires: now.Add(TimeSpan.FromMinutes(JwtOptions.LIFETIME)),
                        signingCredentials: new SigningCredentials(JwtOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));

        var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

        var response = new
        {
            access_token = encodedJwt,
            username = user.Email,
            userid = user.Id,
            role = user.Role
        };
        return Json(response);
    }
    
    [Authorize]
    [HttpGet]
    public async Task<IActionResult> Me()
    {
        var currentUserId = Guid.Parse(User.Claims.First(e => e.Type == "UserId").Value);
        var user = await dbContext
            .Users
            .FirstOrDefaultAsync(e => e.Id == currentUserId);

        if (user is null)
        {
            return Unauthorized();
        }
        
        return Ok(new
        {
            user.Id, 
            user.Email, 
            Role = user.Role.ToString(),
        });
    }

    [Authorize]
    [HttpPost]
    public new SignOutResult SignOut()
    {
        return SignOut(CookieAuthenticationDefaults.AuthenticationScheme);
    }
}
