namespace API.Models
{
    public interface IPostService {
        /// <summary>
        /// Returns all the posts
        /// </summary>
        /// <returns></returns>
        List<Post> GetAllPosts();
        /// <summary>
        /// Returns the post associated with the ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Post GetPost(int id);
        /// <summary>
        /// Saves the post data to the database
        /// </summary>
        /// <param name="post"></param>
        /// <returns></returns>
        int Save(Post post);
        /// <summary>
        /// Saves the comments in the post to the database
        /// </summary>
        /// <param name="comment"></param>
        /// <returns></returns>
        int SaveComment(Comment comment);
        /// <summary>
        /// Updates the post data for the post associated with the ID.
        /// </summary>
        /// <param name="post"></param>
        /// <returns></returns>
        int UpdatePost(Post post);
        /// <summary>
        /// Removes the post associated with the ID
        /// </summary>
        /// <param name="id"></param>
        void RemovePost(int id);
    }
}