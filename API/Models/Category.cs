using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace API.Models
{
    public class Category
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity), Key()]
        public int CategoryId {get; set;}

        public string CategoryName {get; set;}
    }
}