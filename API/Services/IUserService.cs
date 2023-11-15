namespace API.Models
{
    public interface IUserService {
        List<User> GetAllUser();
        User GetUser(int id);
        int Save(User user);
        int UpdateUser(int id, User user);
        void RemoveUser(int id);
    }
}