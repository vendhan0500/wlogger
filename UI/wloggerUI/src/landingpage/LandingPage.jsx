import React from 'react'
import './LandingPage.css'
import WelcomeText from './WelcomeText'
import RecentBlogs from './RecentBlogs'

export default function LandingPage() {
  return (
    <div className='landingpage-container'>
        <div className="sections">
            <WelcomeText />
            <RecentBlogs />
        </div>
    </div>
  )
}
