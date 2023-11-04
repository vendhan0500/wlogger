using System.Diagnostics;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class LoginController : ControllerBase{

    private readonly BlogContext _dbContext;

    public LoginController(BlogContext dbContext)
    {
        _dbContext = dbContext;
    }


}