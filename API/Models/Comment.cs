

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models{
    public class Comment{
        [DatabaseGenerated(DatabaseGeneratedOption.Identity), Key()]
        public int CommentId { get; set; }
        public string? CommentBody {get; set;}
        public int UserId {get; set;}
        public string? UserName {get; set;}
        public int? CommentParentId {get; set;}
        public int PostId {get; set;}
        public DateTime CreatedAt {get; set;}
    }
}