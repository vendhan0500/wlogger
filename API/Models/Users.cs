using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace API.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string UserId {get; set;}
        [BsonElement("name")]
        public string UserName {get; set;}
        [BsonElement("email")]
        public string Email {get; set;}
        [BsonElement("password")]
        public string Password {get; set;}
        [BsonElement("profilepic")]
        public string ProfilePicture {get; set;}
        [BsonElement("dateAdded")]
        public DateTime DateAdded {get; set;}
        [BsonElement("dateModified")]
        public DateTime DateModified {get; set;}
    }
}