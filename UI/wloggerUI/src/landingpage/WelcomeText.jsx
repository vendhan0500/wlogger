import React, { useEffect, useRef } from 'react'
import './WelcomText.css'
import {init} from 'ityped'

export default function () {

  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings:["is a great way to show your talents","Ideas are easy. Implementation is hard."]
    })
  }, [])

  return (
    <div className='welcometext-container'>
      <div className="left-container">
        <h2>Blogging is <br></br>a conversation.</h2>
        <h3>Not Code.</h3>
      </div>
      <div className="right-container">
        <div className="wrapper">
          <h1>BLOGGING</h1>
          <h3><span ref={textRef}></span></h3>
        </div>
      </div>
    </div>
  )
}
