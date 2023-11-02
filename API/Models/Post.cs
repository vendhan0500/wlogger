using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace API.Models
{
    public class Post
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string PostId {get; set;}
        [BsonElement("title")]
        public string Title {get; set;}
        [BsonElement("description")]
        public string Description {get; set;}
        [BsonElement("photo")]
        public string Photo {get; set;}
        [BsonElement("username")]
        public string UserName {get; set;}
        [BsonElement("categories")]
        public List<Category> Categories {get; set;}
        [BsonElement("dateAdded")]
        public DateTime DateAdded {get; set;}
        [BsonElement("dateModified")]
        public DateTime DateModified {get; set;}
    }
}