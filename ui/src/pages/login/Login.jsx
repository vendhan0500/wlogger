import { useState } from 'react'
import './Login.css'
import axios from 'axios'
import setUser from '../../Context/Reducer'
import { connect, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { login } from '../../components/feature/userSlice'
import { useLocation } from 'react-router-dom/cjs/react-router-dom'

function Login() {
  const [formData, setFormData] = useState({
    userMail: '',
    password: '',
  })

  const [isButtonDisabled, setButtonDisabled] = useState(false)
  const dispatch = useDispatch();
  const location = useLocation();


  const handleInputChange = (e) => {
    console.log(e)
    console.log(e.target.name, e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setButtonDisabled(true)
    axios
      .post('https://localhost:7148/Auth/login', formData)
      .then((response) => {
        console.log(response)
        if (response.request.status === 200) {
          toast('Login Successful')
        }
        dispatch(login({
          email:response.data.user.email,
          userId:response.data.user.userId,
          userName:response.data.user.userName,
          profileImg:response.data.user.profileImg
        }))
      })
      .catch((err) => {
        console.error(err)
        toast(err.response.data)
      })
    setTimeout(() => {
      setButtonDisabled(false)
    }, 2000)

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

export default connect(null, { setUser })(Login)
