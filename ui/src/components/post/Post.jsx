import { Link } from 'react-router-dom'
import './Post.css'

export default function Post({ img, post }) {
  console.log(post)

  function timeAgoWithTimeZone(datetime) {
    const now = new Date()
    const timestamp = new Date(datetime)
    const localTimezoneOffset = now.getTimezoneOffset() // Get local timezone offset in minutes
    const diffInMilliseconds = now - timestamp + localTimezoneOffset * 60 * 1000 // Adjust for local time zone

    const secondsAgo = Math.floor(diffInMilliseconds / 1000)
    const minutesAgo = Math.floor(secondsAgo / 60)
    const hoursAgo = Math.floor(minutesAgo / 60)
    const weeksAgo = Math.floor(diffInMilliseconds / 604800000)

    if (weeksAgo > 0) {
      return weeksAgo + ' weeks ago'
    } else if (hoursAgo > 0) {
      return hoursAgo + ' hours ago'
    } else if (minutesAgo > 0) {
      return minutesAgo + ' minutes ago'
    } else {
      return secondsAgo + ' seconds ago'
    }
  }

  return (
    <div className='post'>
      <img className='postImg' src={img} alt='' />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>
            <Link className='link' to='/posts?cat=Music'>
              Music
            </Link>
          </span>
          <span className='postCat'>
            <Link className='link' to='/posts?cat=Music'>
              Life
            </Link>
          </span>
        </div>
        <span className='postTitle'>
          <Link to={`/post/${post.postId}`} className='link'>
            {post.title}
          </Link>
        </span>
        <hr />
        <span className='postDate'>{timeAgoWithTimeZone(post.dateAdded)}</span>
      </div>
      <p className='postDesc'>{post.description}</p>
    </div>
  )
}
