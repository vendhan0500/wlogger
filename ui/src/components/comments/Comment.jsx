import React from 'react'
import './Comment.css'

export default function Comment({comment, replies}) {
    console.log(replies)
  return (
    <div className='comment'>
        <div className="comment-image-container">
            <img src="/user-icon.png" alt="" />
        </div>
        <div className="comment-right-part">
            <div className="comment-author">
                <div className="comment-author">{comment.username}</div>
            </div>
            <div className="comment-text">{comment.body}</div>
            {
                replies.length > 0 && (
                    <div className="replies">
                        {replies.map((reply) => (
                            <Comment comment={reply} key={reply.id} replies={[]}/>
                        ))}
                    </div>
                )
            }
        </div>
    </div>
  )
}
