using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace ElectronicsStore.WebApi.Controllers
{
    public class JwtOptions
    {
        public const string ISSUER = "ElectronicWeb";
        public const string AUDIENCE = "ElectronicWeb";
        private static readonly string KEY = "AHHFSHHAHHAHAAAHAHHFSHHAHHAHAAAH";
        public const int LIFETIME = 120;
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}
