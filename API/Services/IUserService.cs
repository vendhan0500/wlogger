namespace API.Models
{
    public interface IUserService {
        List<User> GetAllUser();
        User GetUser(string id);
        User Save(User user);
        void UpdateUser(string id, User user);
        void RemoveUser(string id);
    }
}