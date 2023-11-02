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
        public string Photo {get; set;}
        [ForeignKey("User")]
        public int UserId {get; set;}
        public User User {get; set;}
        public int CategoryId {get; set;}
        [ForeignKey("CategoryId")]
        public Category Category {get; set;}
        [BsonElement("dateAdded")]
        public DateTime DateAdded {get; set;}
        [BsonElement("dateModified")]
        public DateTime DateModified {get; set;}
    }
}