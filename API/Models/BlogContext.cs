using Microsoft.EntityFrameworkCore;

namespace API.Models{

    public class BlogContext : DbContext{

        public BlogContext(DbContextOptions<BlogContext> options) : base(options)
        {
            
        }

        public DbSet<User> Users {get; set;}
        public DbSet<Post> Posts {get; set;}
        public DbSet<Category> Categories {get; set;}
    }
}