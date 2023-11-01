import React from 'react'
import './Navbar.css'
import white from './white.png'
import black from './black.png'
import ThemeToggle from '../themeToggle/ThemeToggle'

export default function Navbar() {
  return (
    <div className='navbar-container'>
        <div className="navbar">
            <div className="left">
                <div className="logo">
                  WLogger
                </div>
            </div>
            <div className="right">
                <div className="header-nav">
                  <div className="header-options">
                    <ThemeToggle />
                  </div>
                  <div className="header-options">
                    <span className="header-option">Write</span>
                  </div>
                  <div className="header-options">
                    <span className="header-option">
                      <button className='sign-in'>Sign In</button>
                    </span>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
