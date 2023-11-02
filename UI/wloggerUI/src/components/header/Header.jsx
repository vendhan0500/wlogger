import React, { useEffect, useRef } from 'react'
import "./header.css";
import landing from '/landing1.jpg'
import {init} from 'ityped'

export default function Header() {

  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings:["Welcome to my blog","I'm a React and .NET core developer"]
    })
  }, [])

  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Hi I'm <i>MUKIL VENDHAN</i></span>
        <span className="headerTitleLg" ref={textRef}></span>
      </div>
      <img
        className="headerImg"
        src={landing}
        alt=""
      />
    </div>
  );
}
