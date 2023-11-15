using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase{

    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet]
    public ActionResult<List<User>> GetAll(){
        return _userService.GetAllUser();
    }

    [HttpGet("{id}")]
    public ActionResult<User> GetUser(int id){
        return _userService.GetUser(id);
    }

    [HttpPost]
    public ActionResult<User> Save([FromBody] User user){
        try{

            int rowsAffected = _userService.Save(user); // SaveChanges returns the number of rows affected

            if (rowsAffected > 0)
            {
                // Data was successfully saved to the database
                return CreatedAtAction(nameof(GetUser), new { id = user.UserId }, user);
            }
            else
            {
                // No data was saved to the database
                return StatusCode(500, "No data was saved to the database.");
            }
        }    
        catch (DbUpdateException dbEx)
        {
            // Log the exception and return an appropriate error response
            return StatusCode(500, $"An error occurred while saving the user.{dbEx}");
        }
        catch (Exception ex)
        {
            // Log the exception and return an appropriate error response
            return StatusCode(500, "An unexpected error occurred.");
        }
    }

    [HttpPut("{id}")]
    public ActionResult UpdateUser(int id, [FromBody] User user){
        var result = _userService.UpdateUser(id, user);
        return Ok($"{result} rows affected" );
    }

    [HttpDelete("{id}")]
    public ActionResult Delete(int id){
        _userService.RemoveUser(id);
        return Ok($"User with Id= {id} deleted" );
    }
}