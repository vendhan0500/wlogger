namespace API.Models
{
    public interface IPostService {
        List<Post> GetAllPosts();
        Post GetPost(string id);
        Post Save(Post post);
        void UpdatePost(string id, Post post);
        void RemovePost(string id);
    }
}