using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Cryptography.Xml;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace API.Helper{

    public class JwtService{
        private string secureKey="this is confidential information especially for you";

         public string Generate(int id)
        {
            var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secureKey));
            var credentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256Signature);
            var header = new JwtHeader(credentials);

            var payload = new JwtPayload(id.ToString(), null, null, null, DateTime.Today.AddDays(1)); // 1 day
            var securityToken = new JwtSecurityToken(header, payload);

            return new JwtSecurityTokenHandler().WriteToken(securityToken);
        }

        public JwtSecurityToken VerifyUser(string jwtToken){

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secureKey);
            tokenHandler.ValidateToken(jwtToken, new TokenValidationParameters(){
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuerSigningKey = true,
                ValidateIssuer = false,
                ValidateAudience = false
            }, out SecurityToken validatedToken);
            Debug.WriteLine(validatedToken);
            return (JwtSecurityToken) validatedToken;
        }
    }
}