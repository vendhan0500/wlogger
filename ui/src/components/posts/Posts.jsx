import Post from '../post/Post'
import './Posts.css'
import PostsData from '../../Dummy'

export default function Posts({ posts }) {
  console.log(posts)

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
      {/* <Post img='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
      <Post img='https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
      <Post img='https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
      <Post img='https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
      <Post img='https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' /> */}
    </div>
  )
}
