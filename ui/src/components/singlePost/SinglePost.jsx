import { Link } from 'react-router-dom'
import './SinglePost.css'
import PostsData from '../../Dummy'
import { useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import axios from 'axios'



export default function SinglePost() {

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  console.log(location);
  const user = {
    userId:1,
    userName:"dev"
  }

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('https://localhost:7148/Post/'+ path);
      console.log(res)
      setPost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
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
      console.log(PostsData)
      // window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put('https://localhost:7148/Post/'+ path, {
        title,
        description,
      });
      console.log(title)
      console.log(description)
      setUpdateMode(false)
    } catch (err) {}
  };

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
  console.log(post);
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          className='singlePostImg'
          src={post.imgUrl}
          alt=''
        />
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.userId === user.userId && (
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
            )}
          </h1>
        )}
        <div className='singlePostInfo'>
          <span>
            Author:
            <b className='singlePostAuthor'>
              <Link className='link' to='/posts?username=Safak'>
                {post.userName}
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
    </div>
  );
}