using MongoDB.Driver;

namespace API.Models{
    public class PostService : IPostService
    {
                private readonly IMongoCollection<Post>  _post;
        public PostService(IBlogDatabaseSettings settings, IMongoClient client)
        {
            var database = client.GetDatabase(settings.DatabaseName);
            _post = database.GetCollection<Post>(settings.BlogCollectionName);
        }
        public List<Post> GetAllPosts()
        {
            return _post.Find(post => true).ToList();
        }

        public Post GetPost(int id)
        {
            return _post.Find(post => post.PostId == id).FirstOrDefault();
        }

        public void RemovePost(int id)
        {
            _post.DeleteOne(post => post.PostId == id);
        }

        public Post Save(Post post)
        {
            _post.InsertOne(post);
            return post;
        }

        public void UpdatePost(int id, Post post)
        {
           _post.ReplaceOne(post => post.PostId == id, post);
        }
    }
}