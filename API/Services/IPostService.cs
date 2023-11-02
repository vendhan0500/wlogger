namespace API.Models
{
    public interface IPostService {
        List<Post> GetAllPosts();
        Post GetPost(int id);
        Post Save(Post post);
        void UpdatePost(int id, Post post);
        void RemovePost(int id);
    }
}