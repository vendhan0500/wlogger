import { useRef, useEffect } from 'react'
import './Header.css'
import landing from '../../../src/assets/landing.jpg'
import { init } from 'ityped'

export default function Header() {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ['Welcome to my blog', 'Place of blogs'],
    })
  }, [])

  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>
          Hi, I am <i>MUKIL VENDHAN</i>
        </span>
        <span className='headerTitleLg' ref={textRef}></span>
      </div>
      <img className='headerImg' src={landing} alt='' />
    </div>
  )
}
