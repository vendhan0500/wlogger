namespace API.Models
{
    public interface IUserService {
        List<User> GetAllUser();
        User GetUser(int id);
        User Save(User user);
        void UpdateUser(int id, User user);
        void RemoveUser(int id);
    }
}