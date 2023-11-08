import React, { useEffect, useState } from 'react'
import './Comment.css'
import {getComments} from './CommentDummy.js'
import Comment from './Comment.jsx';
import CommentForm from './CommentForm.jsx';

export default function Comments() {

  const[comments, setComments] = useState([]);
  const rootComments = comments.filter((comment) => comment.parentId === null)

  const getReplies = commentId => {
    return comments.filter(comment => comment.parentId === commentId).sort((x,y) => 
    new Date(x.createdAt).getTime() - new Date(y.createdAt).getTime()) 
  }

  const addComment = (text, parentId) => {

  }

  useEffect(() => {
    getComments().then((data) => {
      setComments(data);
    })
  },[])
  return (
    <div className='comment-section'>
      <h3 className='comment-title'>Comments</h3>
      <div className="comment-form-title">Write comment</div>
      <CommentForm submitLabel="Write" handleSubmit={addComment}/>
      <div className='comment-container'>
          {rootComments.map(rootComment => (
            <Comment key={rootComment.id} comment = {rootComment} replies={getReplies(rootComment.id)}/>
          ))}
      </div>
    </div>
  )
}
