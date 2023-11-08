

namespace API.Models{
    public class Comment{
        public int CommentId { get; set; }
        public List<CommentList?> CommentBody { get; set; }
        public int UserId {get; set;}
    }
}