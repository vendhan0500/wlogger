import React from 'react'
import './ThemeToggle.css'
import moon from './moon.png'
import sun from './sun.png'
import {useDispatch, useSelector} from 'react-redux'
import { toggleDarkMode } from './darkModeSlice'

export default function ThemeToggle() {

    const {mode} = useSelector((state) => state.darkMode);
    const dispatch = useDispatch();
  return (
    <div className='themetoggle-container' onClick={() => dispatch(toggleDarkMode())} style={!mode ? {background:"white"} : {background:"#0f172a"}}>
        <img src={moon} alt="" width={14} height={14}/>
        <div className="ball"  style={mode ? {right:1} : {left:1}}></div>
        <img src={sun} alt="" height={14} width={14}/>
    </div>
  )
}
