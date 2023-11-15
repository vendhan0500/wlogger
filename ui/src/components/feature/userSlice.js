import { createSlice, configureStore } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
  },
  reducers: {
    login: (state, action) => {
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
