import React from 'react'
import './Card.css'
import sample from '../../public/image1.jpg'

export default function Card() {
  return (
    <div className='card-container'>
        <div className="text-container">
            <div className="detail">
                <span className="date">11.10.2023</span>
                <span className="category">PROGRAMMING</span>
            </div>
            <h1 className='title'>Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
            <div className="desc">
                
            </div>
        </div>
    </div>
  )
}
