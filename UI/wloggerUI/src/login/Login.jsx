import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className='login-container'>
      <div className="login-wrapper">
        <div className="social-button" onClick={() => SignIn("google")}>
          Sign in with Google
        </div>
        <div className="social-button">Sign in with Github</div>
        <div className="social-button">Sign in with Facebook</div>
      </div>
    </div>
  )
}
