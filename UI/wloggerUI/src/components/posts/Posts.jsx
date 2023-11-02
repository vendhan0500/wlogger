import Post from "../post/Post";
import "./posts.css";
import postimg from '../../../public/postimg.jpeg'

export default function Posts() {
  return (
    <div className="posts">
      <Post img={postimg} />
      <Post img={postimg} />
      <Post img={postimg} />
      <Post img={postimg} />
      <Post img={postimg} />
    </div>
  );
}
