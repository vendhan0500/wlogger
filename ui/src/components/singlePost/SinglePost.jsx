import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './SinglePost.css'
import PostsData from '../../Dummy'
import { useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import axios from 'axios'
import Comments from '../comments/Comments';
import { selectUser } from '../../components/feature/userSlice';



export default function SinglePost() {

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState([]);
  const currentUser = useSelector(selectUser);
  console.log("CURR", currentUser.user.userId)

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('https://localhost:7148/Post/'+ path);
      setPost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
      if(Object.entries(res.data.user).length !== 0)
        setAuthor(res.data.user.userName);
      else
        setAuthor("System Generated");
      setComment(res.data.comments);
    };
    getPost();
      setTitle(post.title);
      setDescription(post.descriptionription);
  }, [path]);

  const handleDelete = async () => {
    try {
      var index = PostsData.indexOf(post)
      if(index !== -1){
        PostsData.splice(index, 1);
      }
      // window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      
      await axios.post('https://localhost:7148/Post/'+ path, {
        title,
        description,
        postId:post.postId,
        userId: currentUser.user.userId,
        photo: "",
        categoryId: 0,
        dateAdded: "2023-11-06T12:45:38.157",
        dateModified: new Date(),
      });
      setUpdateMode(false)
    } catch (err) {
      console.log(err)
    }
  };

  console.log(currentUser.user)

  function timeAgoWithTimeZone(datetime) {
    const now = new Date()
    const timestamp = new Date(datetime)
    const localTimezoneOffset = now.getTimezoneOffset() // Get local timezone offset in minutes
    const diffInMilliseconds = now - timestamp + localTimezoneOffset * 60 * 1000 // Adjust for local time zone
    var seconds = Math.floor((new Date() - datetime) / 1000);

    const secondsAgo = Math.floor(diffInMilliseconds / 1000)
    const minutesAgo = Math.floor(secondsAgo / 60)
    const hoursAgo = Math.floor(minutesAgo / 60)
    const daysAgo = Math.floor( seconds / 60)
    const weeksAgo = Math.floor(diffInMilliseconds / 604800000)

    if (weeksAgo > 0) {
      return weeksAgo + ' weeks ago'
    } else if (hoursAgo > 0) {
      return hoursAgo + ' hours ago'
    } else if (minutesAgo > 0) {
      return minutesAgo + ' minutes ago'
    } else if(hoursAgo > 24 && daysAgo > 0){
      return daysAgo + 'day ago'
    }
    else {
      return secondsAgo + ' seconds ago'
    }
  }
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          className='singlePostImg'
          src="https://img.freepik.com/free-photo/teamwork-making-online-blog_53876-94868.jpg?w=900&t=st=1699261850~exp=1699262450~hmac=cc3542758eef868965bd7dd0cd2724b90e367dc6cb82b282b156307b7d7ee917"
          alt=''
        />
        <h1 className="singlePostTitle">
          {title}
          {/* {post.userId === currentUser.user.userId && (
            <div className="singlePostEdit">
              <i
                className="singlePostIcon far fa-edit"
                onClick={() => setUpdateMode(true)}
              ></i>
              <i
                className="singlePostIcon far fa-trash-alt"
                onClick={handleDelete}
              ></i>
            </div>
          )} */}
        </h1>
        <div className='singlePostInfo'>
          <span>
            Author:
            <b className='singlePostAuthor'>
              <Link className='link' to='/posts?username=Safak'>
                {author}
              </Link>
            </b>
          </span>
          <span>{timeAgoWithTimeZone(post.dateAdded)}</span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescriptionInput"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          <p className="singlePostDescription">{description}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
      <div className="comment-section-container">
        <Comments currentUserId={currentUser.user.userId}/> 
      </div>
    </div>
  );
}