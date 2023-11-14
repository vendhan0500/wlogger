import { useState } from 'react'
import './Write.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Write() {
  const [title, setTitle] = useState('')
  const [description, setDesc] = useState('')
  const [file, setFile] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = {
      title,
      description,
      userId: 1,
      user:{},
      photo: '',
      commentId:0,
      comments:[],
      dateAdded: new Date(),
      dateModified: new Date(),
    }
    console.log(newPost)
    if (file) {
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append('name', filename)
      data.append('file', file)
      newPost.photo = filename
      // try {
      //   await axios.post('/upload', data)
      // } catch (err) {}
    }
    try {
      const res = await axios.post('https://localhost:7148/Post', newPost)
      console.log(res)
      if (res.status === 201) {
        toast('Post Added Sucessfully. Redirecting you to home page')
        setTimeout(() => {
          window.location.replace('/')
        }, 5000)
      }
    } catch (err) {}
  }

  return (
    <div className='write'>
      {file && (
        <img className='writeImg' src={URL.createObjectURL(file)} alt='' />
      )}
      <form className='writeForm' onSubmit={handleSubmit}>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fas fa-plus'></i>
          </label>
          <input
            id='fileInput'
            type='file'
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className='writeInput'
            placeholder='Title'
            type='text'
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            className='writeInput writeText'
            placeholder='Tell your story...'
            type='text'
            autoFocus={true}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button className='writeSubmit' type='submit'>
          Publish
        </button>
      </form>
      <ToastContainer
        position='top-right'
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  )
}
