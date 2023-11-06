using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace API.Models
{
    public class User
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity), Key()]
        public int UserId {get; set;}
        public string UserName {get; set;}
        public string Email {get; set;}
        public string Password {get; set;}
        public string ProfilePicture {get; set;}
        public DateTime DateAdded {get; set;}
        public DateTime DateModified {get; set;}
    }
}