import { useState } from 'react'
import './Register.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Register() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    profilePicture: '',
    dateAdded: new Date(),
    dateModified: new Date(),
  })

  const [isButtonDisabled, setButtonDisabled] = useState(false)

  const handleInputChange = (e) => {
    console.log(e)
    console.log(e.target.name, e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setButtonDisabled(true)
    axios
      .post('https://localhost:7148/User', formData)
      .then((response) => {
        console.log(response)
        if (response.request.status === 201) {
          toast('Registeration Successful')
        }
      })
      .catch((err) => {
        console.error(err)
      })
    setTimeout(() => {
      setButtonDisabled(false)
      window.location.replace('/login')
    }, 2000)
  }

  const showPreview = (e) => {
    console.log(e)
    console.log(e.target.name, e.target.value)
    if(e.target.value.trim() !== ''){
      console.log(document.getElementById('profImage').innerHTML)
      document.getElementById('profImage').innerHTML = `<img src="${e.target.value}" alt="previewimg"
      style="max-width:100%; max-height:200px"/>`
    }
  }

  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <div className="imagePreview"  id='profImage'>

      </div>
      <form className='registerForm' onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className='registerInput'
          type='text'
          placeholder='Enter your username...'
          onChange={handleInputChange}
          name='userName'
        />
        <label>Email</label>
        <input
          className='registerInput'
          type='text'
          placeholder='Enter your email...'
          onChange={handleInputChange}
          name='email'
        />
        <label>Profile Image Url</label>
        <input
          className='registerInput'
          type='text'
          placeholder='Enter your image url...'
          onChange={handleInputChange}
          onBlur={showPreview}
          name='profImage'
        />
        <label>Password</label>
        <input
          className='registerInput'
          type='password'
          placeholder='Enter your password...'
          onChange={handleInputChange}
          name='password'
        />
        <button className='registerButton' disabled={isButtonDisabled}>
          Register
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
