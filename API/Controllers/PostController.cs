using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class PostController : ControllerBase{
    
    private readonly IPostService _postService;
    public PostController(IPostService postService)
    {
        _postService = postService;
    }

    [HttpGet]
    public ActionResult<List<Post>> GetAll(){
        return _postService.GetAllPosts();
    }

    [HttpGet("{id}")]
    public ActionResult<Post?> GetPost(int id){
        return _postService.GetPost(id);
    }

    [HttpPost]
    public ActionResult<User> Save([FromBody] Post post){
       _postService.Save(post);
        return CreatedAtAction(nameof(GetPost), new {id=post.PostId}, post);
    }

    [HttpPut]
    public ActionResult Update([FromBody] Post post){
        _postService.UpdatePost(post);
        return Ok($"Update Success");
    }

    [HttpDelete("{id}")]
    public ActionResult Delete(int id){
        _postService.RemovePost(id);
        return Ok($"Post with Id= {id} deleted" );
    }

    [HttpPost("SaveComment")]
    public ActionResult SaveComment([FromBody] Comment comment){
        _postService.SaveComment(comment);
        return Ok("Action successful");
    }

    // [HttpGet("GetComment")]
    // public ActionResult<List<Comment>> GetPostComment(int postId){
    //     var comments = _dbContext.Comment.OrderByDescending(x => x.CreatedAt).ToList();
    //     return comments.Count() != 0  ? comments : null;
    // }
}