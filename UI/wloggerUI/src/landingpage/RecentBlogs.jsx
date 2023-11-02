import React from 'react'
import './RecentBlogs.css'
import Card from '../card/Card'

export default function RecentBlogs() {
  return (
    <div className='recentblogs-container'>
      <h1 className='title'>Recent Posts</h1>
      <div className="posts">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
