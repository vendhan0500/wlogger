import { Link } from 'react-router-dom'
import './Topbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../components/feature/userSlice'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Topbar() {

  const userData = useSelector(selectUser);
  const user = userData.user != null ? userData : false;

  const dispatch = useDispatch();


  const handleLogout = (e) => {
    e.preventDefault()
    axios
      .post('https://localhost:7148/Auth/logout')
      .then((response) => {
        console.log(response)
        if (response.request.status === 200) {
          toast('You have been logged out')
        }
        dispatch(logout(user))
        window.location.replace('/login')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='topIcon fab fa-facebook-square'></i>
        <i className='topIcon fab fa-instagram-square'></i>
        <i className='topIcon fab fa-pinterest-square'></i>
        <i className='topIcon fab fa-twitter-square'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/'>
              HOME
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/write'>
              WRITE
            </Link>
          </li>
          {user && <li className='topListItem' onClick={handleLogout}>LOGOUT</li>}
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <Link className='link' to='/settings'>
            <img
              className='topImg'
              src="data:image/png;base64,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"
              alt=''
            />
          </Link>
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/login'>
                LOGIN
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/register'>
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
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
