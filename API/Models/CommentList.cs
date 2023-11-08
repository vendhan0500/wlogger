using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models{

    public class CommentList{

        public int CommentListId {get; set;}
        public string? CommentBody {get; set;}
        [ForeignKey("user")]
        public int? CommentedBy {get; set;}
        public User User {get; set;}
    }
}