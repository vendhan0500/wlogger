import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import LandingPage from './landingpage/LandingPage'
import {useDispatch, useSelector} from 'react-redux'
import Post from './post/Post'

function App() {
  const [count, setCount] = useState(0)
  const {mode} = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  return (
    <>
      <div className={'app' }>
        <Navbar/>
        <LandingPage />
        <Post />
        <Footer />
      </div>
    </>
  )
}

export default App
