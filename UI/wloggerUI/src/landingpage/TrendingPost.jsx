import React from 'react'
import "./TrendingPost.css"
import sample from './image1.jpg'

export default function TrendingPost() {
  return (
    <div className="trendingpost-container">
        <h1 className="title">
        <b>How I scaled Amazon’s Load Generator to run on 1000s of machines</b>
        </h1>
        <div className="post">
        <div className="imgContainer">
            <img src={sample} alt="" fill className="image" />
        </div>
        <div className="textContainer">
            <h1 className="postTitle">Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
            <p className="postDesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
            </p>
            <button className="button">Read More</button>
        </div>
        </div>
    </div>
  )
}
