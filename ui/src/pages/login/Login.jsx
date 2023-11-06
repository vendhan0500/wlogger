import { useState } from 'react'
import './Login.css'
import axios from 'axios'
import setUser from '../../Context/Reducer'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Login({ user }) {
  const [formData, setFormData] = useState({
    userMail: '',
    password: '',
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
      .post('https://localhost:7148/Auth/login', formData)
      .then((response) => {
        console.log(response)
        if (response.request.status === 200) {
          toast('Login Successful')
        }
        console.log(response.data.user)
        setUser(response.data.user)
      })
      .catch((err) => {
        console.error(err)
      })
    setTimeout(() => {
      setButtonDisabled(false)
    }, 2000)
    console.log(isButtonDisabled)
  }

  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <form className='loginForm' onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          className='loginInput'
          type='text'
          placeholder='Enter your email...'
          onChange={handleInputChange}
          name='userMail'
        />
        <label>Password</label>
        <input
          className='loginInput'
          type='password'
          placeholder='Enter your password...'
          onChange={handleInputChange}
          name='password'
        />
        <button className='loginButton' disabled={isButtonDisabled}>
          Login
        </button>
      </form>
      <button className='loginRegisterButton'>Register</button>
      <ToastContainer
        position='top-center'
        autoClose={5000}
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

export default connect(null, { setUser })(Login)
