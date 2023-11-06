import { Link } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src='' alt='' />
        <p>
          I am MukilVendhan R. Working as a Senior Product Enginerr in LTI
          Mindtree.This is my blog website
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <Link className='link' to='/posts?cat=Life'>
              Life
            </Link>
          </li>
          <li className='sidebarListItem'>
            <Link className='link' to='/posts?cat=Music'>
              Music
            </Link>
          </li>
          <li className='sidebarListItem'>
            <Link className='link' to='/posts?cat=Sport'>
              Sport
            </Link>
          </li>
          <li className='sidebarListItem'>
            <Link className='link' to='/posts?cat=Style'>
              Style
            </Link>
          </li>
          <li className='sidebarListItem'>
            <Link className='link' to='/posts?cat=Tech'>
              Tech
            </Link>
          </li>
          <li className='sidebarListItem'>
            <Link className='link' to='/posts?cat=Cinema'>
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW ME</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fab fa-facebook-square'></i>
          <i className='sidebarIcon fab fa-instagram-square'></i>
          <i className='sidebarIcon fab fa-pinterest-square'></i>
          <i className='sidebarIcon fab fa-twitter-square'></i>
        </div>
      </div>
    </div>
  )
}
