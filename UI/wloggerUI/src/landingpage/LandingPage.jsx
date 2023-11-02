import React from 'react'
import './LandingPage.css'
import WelcomeText from './WelcomeText'
import RecentBlogs from './RecentBlogs'
import TrendingPost from './TrendingPost'

export default function LandingPage() {
  return (
    <div className='landingpage-container'>
        <div className="sections">
            <WelcomeText />
            <TrendingPost/>
            <RecentBlogs />
        </div>
    </div>
  )
}
