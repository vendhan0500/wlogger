import {configureStore} from '@reduxjs/toolkit'
import darkModeReducer from './themeToggle/darkModeSlice'


export const store = configureStore({
    reducer:{
        darkMode: darkModeReducer
    }
})