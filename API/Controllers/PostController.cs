using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class PostController : ControllerBase{

    private readonly BlogContext _dbContext;
    public PostController(BlogContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpGet]
    public ActionResult<List<Post>> GetAll(){
        return _dbContext.Posts.ToList();
    }

    [HttpGet("{id}")]
    public ActionResult<Post> GetStudent(int id){
        return _dbContext.Posts.FirstOrDefault(x => x.PostId == id);
    }

    [HttpPost]
    public ActionResult<User> Save([FromBody] Post post){
        _dbContext.Posts.Add(post);
        _dbContext.SaveChanges();
        return CreatedAtAction(nameof(GetStudent), new {id=post.PostId}, post);
    }

    [HttpPut("{id}")]
    public ActionResult UpdatePost(int id, [FromBody] Post post){
        var existingPost = _dbContext.Posts.FirstOrDefault(x => x.PostId == id);
        if(existingPost == null){
            return NotFound($"Student with Id = {id} not found");
        }
        existingPost = post;
        _dbContext.SaveChanges();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public ActionResult Delete(int id){
        var post =  _dbContext.Posts.FirstOrDefault(x => x.PostId == id);
        if(post == null) {
            return NotFound($"Student with Id = {id} not found");
        }
        _dbContext.Posts.Remove(post);
        _dbContext.SaveChanges();
        return Ok($"Student with Id= {id} deleted" );
    }
}