using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;

namespace API.Models{
    public class PostService : IPostService
    {
        private readonly BlogContext? _dbContext;
        public List<Post> GetAllPosts()
        {
            return _dbContext.Posts.ToList();
        }

        public Post GetPost(int id)
        {
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

        public void RemovePost(int id)
        {
            try
            {
                var post =  _dbContext.Posts.FirstOrDefault(x => x.PostId == id);
                if(post != null) {
                    _dbContext.Posts.Remove(post);
                    _dbContext.SaveChanges();
                }
            }catch(Exception){
                throw;
            }
        }

        public int Save(Post post)
        {
            try
            {
                 _dbContext.Posts.Add(post);
                return _dbContext.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public int UpdatePost(Post post)
        {
           try{
                var existingPost = _dbContext.Posts.AsNoTracking().FirstOrDefault(x => x.PostId == post.PostId);
                if(post.Comments != null && post.Comments.Count > 0){
                    var comments =  new List<Comment>(post.Comments);
                    foreach(var comment in comments){
                        _dbContext.Comment.Add(comment);
                    }
                }
                _dbContext.Entry(post).State = EntityState.Modified;
                return _dbContext.SaveChanges();
           }catch(Exception){
                throw;
           }
        }

        public int SaveComment(Comment comment){
            try{
                _dbContext.Comment.Add(comment);
                return _dbContext.SaveChanges();
            }catch(Exception){
                throw;
            }
        }
    }
}