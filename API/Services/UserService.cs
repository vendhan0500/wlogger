using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;

namespace API.Models{
    public class UserService : IUserService
    {
        private readonly BlogContext? _dbContext;

        public List<User> GetAllUser()
        {
           return _dbContext.Users.ToList();
        }

        public User GetUser(int id)
        {
            return _dbContext.Users.FirstOrDefault(x => x.UserId == id);
        }

        public void RemoveUser(int id)
        {
            try{

                var existingUser = _dbContext.Users.FirstOrDefault(x => x.UserId == id);
                _dbContext.Users.Remove(existingUser);
                _dbContext.SaveChanges();
            }catch(Exception){
                throw;
            }
        }

        public int Save(User user)
        {
            try{
                _dbContext.Users.Add(user);
                return _dbContext.SaveChanges();
            }catch(Exception){
                throw;
            }
        }

        public int UpdateUser(int id, User user)
        {
            try{

                var existingUser = _dbContext.Users.FirstOrDefault(x => x.UserId == id);
                user.DateAdded = existingUser.DateAdded;
                if(existingUser != null){
                    _dbContext.Entry(user).State = EntityState.Modified;
                }
                return _dbContext.SaveChanges();

            }catch(Exception e){
                throw e;
            }
        }
    }
}