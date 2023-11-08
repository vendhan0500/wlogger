import { configureStore } from '@reduxjs/toolkit'
import Reducer from '.././components/feature/userSlice'



export default configureStore({
  reducer:{
    user: Reducer
  }
})