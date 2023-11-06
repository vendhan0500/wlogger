using System.Diagnostics;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase{

    private readonly BlogContext _dbContext;

    public UserController(BlogContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpGet]
    public ActionResult<List<User>> GetAll(){
        return _dbContext.Users.ToList();
    }

    [HttpGet("{id}")]
    public ActionResult<User> GetUser(int id){
        return _dbContext.Users.FirstOrDefault(x => x.UserId == id);
    }

    [HttpPost]
    public ActionResult<User> Save([FromBody] User user){
        try{

            _dbContext.Users.Add(user);
            int rowsAffected = _dbContext.SaveChanges(); // SaveChanges returns the number of rows affected

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
        var existingUser = _dbContext.Users.FirstOrDefault(x => x.UserId == id);
        if(existingUser == null){
            return NotFound($"Student with Id = {id} not found");
        }
        existingUser = user;
        _dbContext.SaveChanges();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public ActionResult Delete(int id){
        var existingUser = _dbContext.Users.FirstOrDefault(x => x.UserId == id);
        if(existingUser == null) {
            return NotFound($"Student with Id = {id} not found");
        }
        _dbContext.Users.Remove(existingUser);
        return Ok($"Student with Id= {id} deleted" );
    }
}