namespace API.Models
{
    public interface IUserService {
        /// <summary>
        /// Returns all the users
        /// </summary>
        /// <returns></returns>
        List<User> GetAllUser();
        /// <summary>
        /// Returns the user associated with the ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        User GetUser(int id);
        /// <summary>
        /// Saves the user data to the database
        /// </summary>
        /// <param name="comment"></param>
        /// <returns></returns>
        int Save(User user);
        /// <summary>
        /// Updates the user data associated with the ID.
        /// </summary>
        /// <param name="post"></param>
        /// <returns></returns>
        int UpdateUser(int id, User user);
        /// <summary>
        /// Removes the user data associated with the ID
        /// </summary>
        /// <param name="id"></param>
        void RemoveUser(int id);
    }
}