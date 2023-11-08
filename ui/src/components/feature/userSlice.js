import { createSlice, configureStore } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user:null
  },
  reducers: {
    login: (state, action) => {
        console.log(action.payload)
        state.user = action.payload
        localStorage.setItem('user', JSON.stringify(state.user))
    },
    logout: (state, action ) => {
      state.user = null
      localStorage.setItem('user', JSON.stringify(state.user))
    }
  }
})

export const { login, logout } = userSlice.actions
export const selectUser = (state) => state.user;

export default userSlice.reducer;