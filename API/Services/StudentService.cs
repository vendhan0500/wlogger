using MongoDB.Driver;

namespace API.Models{
    public class UserService : IUserService
    {
        private readonly IMongoCollection<User>  _user;
        public UserService(IBlogDatabaseSettings settings, IMongoClient client)
        {
            var database = client.GetDatabase(settings.DatabaseName);
            _user = database.GetCollection<User>(settings.BlogCollectionName);
        }
        public List<User> GetAllUser()
        {
            return _user.Find(user => true).ToList();
        }

        public User GetUser(string id)
        {
            return _user.Find(user => user.UserId == id).FirstOrDefault();
        }

        public void RemoveUser(string id)
        {
            _user.DeleteOne(user => user.UserId == id);
        }

        public User Save(User user)
        {
            _user.InsertOne(user);
            return user;
        }

        public void UpdateUser(string id, User user)
        {
           _user.ReplaceOne(user => user.UserId == id, user);
        }
    }
}