import { Link } from "react-router-dom";
import "./topbar.css";
import moon from '../../themeToggle/moon.png'
import sun from '../../themeToggle/sun.png'
import {useDispatch, useSelector} from 'react-redux'
import { toggleDarkMode } from '../../themeToggle/darkModeSlice'
import profile from '../../../public/profile.jpg'

export default function Topbar() {
  const user = false;
  const {mode} = useSelector((state) => state.darkMode);
  console.log(mode)
  const dispatch = useDispatch();

  return (
    <div className={`top ${mode ? "dark" : "light"}`}>
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem link">LOGOUT</li>}
          {/* <li className="topListItem">
              <div className='themetoggle-container' onClick={() => dispatch(toggleDarkMode())} style={mode ? {background:"white"} : {background:"#0f172a"}}>
                <img src={moon} alt="" width={14} height={14}/>
                <div className="ball"  style={mode ? {right:1, background: "black"} : {left:1, background:"white"}}></div>
                <img src={sun} alt="" height={14} width={14}/>
              </div>
          </li> */}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={profile}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
