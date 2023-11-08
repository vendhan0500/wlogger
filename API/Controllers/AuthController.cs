using System.IdentityModel.Tokens.Jwt;
using System.Text;
using API.Helper;
using API.Models;
using Azure;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthController : ControllerBase{

    private readonly BlogContext _dbContext;
    private readonly JwtService _jwtService;

    public AuthController(BlogContext dbContext, JwtService jwtService)
    {
        _dbContext = dbContext;
        _jwtService = jwtService;
    }

    [HttpPost("login")]
    public ActionResult Login([FromBody] UserViewModel user){
       
        try{
            var existingUser = _dbContext.Users.FirstOrDefault(x => x.Email == user.UserMail && x.Password == user.Password);
            if(existingUser == null){
                return BadRequest("User not found");
            }

            var jwtToken = _jwtService.Generate(existingUser.UserId);
            Response.Cookies.Append("jwt", jwtToken, new CookieOptions{
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.None,
                Expires = DateTime.UtcNow.AddHours(1)
            });
            return Ok(new {message = "Success", user =new  {
                userId = existingUser.UserId,
                userName = existingUser.UserName,
                email = existingUser.Email,
                jwt = jwtToken
            }});

        }catch(Exception e){
            return StatusCode(500, "Error occured");
        }
        
    }

    [HttpGet("user")]
    public IActionResult User(){
        try{

            var jwt = Request.Cookies["jwt"];
            var token = _jwtService.VerifyUser(jwt);

            int userId = int.Parse(token.Issuer);

            var user = _dbContext.Users.FirstOrDefault(x => x.UserId == userId);
            return Ok(user);

        }catch(Exception e){
            return Ok(e.Message);
        }
    }

    [HttpPost("logout")]
    public IActionResult LogOut(){
       Response.Cookies.Delete("jwt");
       return Ok(new{
        message = "User Logged Out"
       });
    }


}