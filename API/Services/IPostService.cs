namespace API.Models
{
    public interface IPostService {
        List<Post> GetAllPosts();
        Post GetPost(int id);
        int Save(Post post);
        int SaveComment(Comment comment);
        int UpdatePost(Post post);
        void RemovePost(int id);
    }
}