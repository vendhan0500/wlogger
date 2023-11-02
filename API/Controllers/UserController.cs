using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase{

    private readonly IUserService userService;
    public UserController(UserService userService)
    {
        this.userService = userService;
    }

    [HttpGet]
    public ActionResult<List<User>> GetAll(){
        return userService.GetAllUser();
    }

    [HttpGet("{id}")]
    public ActionResult<User> GetStudent(string id){
        return userService.GetUser(id);
    }

    [HttpPost]
    public ActionResult<User> Save([FromBody] User user){
        userService.Save(user);
        return CreatedAtAction(nameof(GetStudent), new {id=user.UserId}, user);
    }

    [HttpPut("{id}")]
    public ActionResult UpdateUser(string id, [FromBody] User user){
        var existingUser = userService.GetUser(id);
        if(existingUser == null){
            return NotFound($"Student with Id = {id} not found");
        }
        userService.UpdateUser(id, user);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public ActionResult Delete(string id){
        var student =  userService.GetUser(id);
        if(student == null) {
            return NotFound($"Student with Id = {id} not found");
        }
        userService.RemoveUser(student.UserId);
        return Ok($"Student with Id= {id} deleted" );
    }
}