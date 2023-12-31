using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace API.Models
{
    public class Post
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity), Key()]
        public int PostId {get; set;}
        public string Title {get; set;}
        public string Description {get; set;}
        public int? CommentId {get; set;}
        public List<Comment?> Comments {get; set;}
        public string Photo {get; set;}
        public int UserId {get; set;}
        [NotMapped]
        public User? User {get; set;}
        public int CategoryId {get; set;}
        public DateTime DateAdded {get; set;} = new DateTime();
        public DateTime DateModified {get; set;} = new DateTime();
    }
}