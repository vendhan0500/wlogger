using API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        var posts = _dbContext.Posts.OrderByDescending(x => x.DateAdded).ToList();
        return posts.Count > 0 ? posts : null;
    }

    [HttpGet("{id}")]
    public ActionResult<Post?> GetPost(int id){
        var post = _dbContext.Posts.FirstOrDefault(x => x.PostId == id);
        if(post != null){
            var user = _dbContext.Users.FirstOrDefault(x => x.UserId == post.UserId);
            if(user != null)
                post.User = user;
            
            var comments = _dbContext.Comment.Where(x => x.PostId == id).ToList();
            if(comments.Count() != 0)
                post.Comments = comments;
        }
        return post;
    }

    [HttpPost]
    public ActionResult<User> Save([FromBody] Post post){
        _dbContext.Posts.Add(post);
        _dbContext.SaveChanges();
        return CreatedAtAction(nameof(GetPost), new {id=post.PostId}, post);
    }

    [HttpPut]
    public ActionResult Update([FromBody] Post post){
        var existingPost = _dbContext.Posts.AsNoTracking().FirstOrDefault(x => x.PostId == post.PostId);
        if(post.Comments != null && post.Comments.Count > 0){
            var comments =  new List<Comment>(post.Comments);
            foreach(var comment in comments){
                _dbContext.Comment.Add(comment);
            }
        }
        if(existingPost == null){
            return NotFound($"Post with Id = {post.PostId} not found");
        }else{
            _dbContext.Entry(post).State = EntityState.Modified;
            _dbContext.SaveChanges();
        }
        return Ok($"Update Success {existingPost}");
    }

    [HttpDelete("{id}")]
    public ActionResult Delete(int id){
        var post =  _dbContext.Posts.FirstOrDefault(x => x.PostId == id);
        if(post == null) {
            return NotFound($"User with Id = {id} not found");
        }
        _dbContext.Posts.Remove(post);
        _dbContext.SaveChanges();
        return Ok($"User with Id= {id} deleted" );
    }

    [HttpPost("SaveComment")]
    public ActionResult SaveComment([FromBody] Comment comment){
         _dbContext.Comment.Add(comment);
         _dbContext.SaveChanges();
        return Ok("Action successful");
    }

    [HttpGet("GetComment")]
    public ActionResult<List<Comment>> GetPostComment(int postId){
        var comments = _dbContext.Comment.OrderByDescending(x => x.CreatedAt).ToList();
        return comments.Count() != 0  ? comments : null;
    }
}