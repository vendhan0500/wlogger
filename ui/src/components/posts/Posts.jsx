import Post from '../post/Post'
import './Posts.css'
import PostsData from '../../Dummy'

export default function Posts({ posts }) {

  return (
    <div className='posts'>
      {
        posts.length !== 0 ?
          posts.map((p) => (
            <Post
              post={p}
              key={p.postId}
              img="https://img.freepik.com/free-photo/teamwork-making-online-blog_53876-94868.jpg?w=900&t=st=1699261850~exp=1699262450~hmac=cc3542758eef868965bd7dd0cd2724b90e367dc6cb82b282b156307b7d7ee917"
            />

      ))
       : <div>No recent posts</div>}
    </div>
  )
}
