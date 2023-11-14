import axios from "axios";
import app from '../../firebase'

export const getComments = async (postId) => {

    var res = await axios.get("https://localhost:7148/Post/GetComment?postId="+ postId);
    console.log(res.data)
    var result = res.data.map((comment) => {
      return  {
        id: comment.commentId,
        body: comment.commentBody,
        username: comment.userName,
        userId: comment.userId,
        parentId: comment.commentParentId !== 0 ? comment.commentParentId : null,
        createdAt: comment.createdAt,
      }
    })
    return result;
  };
  
  export const createComment = async (text, parentId = null, user, postId) => {
    console.log(parentId, postId, user)
    var commentContent = {
      commentId: 0,
      commentBody: text,
      userId: user.userId,
      userName: user.userName,
      commentParentId: parentId ?? 0,
      postId,
      createdAt: new Date().toISOString()
    };

    const res = await axios.post('https://localhost:7148/Post/SaveComment', commentContent)
    console.log(res)
    return commentContent;
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };