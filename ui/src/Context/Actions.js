export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user,
})

export const logout = () => ({
  type: 'LOGOUT',
})

export const LoginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
})

export const LoginFailure = () => ({
  type: 'LOGIN_FAILURE',
})

export const Logout = () => ({
  type: 'LOGOUT',
})

export const UpdateStart = (userCredentials) => ({
  type: 'UPDATE_START',
})

export const UpdateSuccess = (user) => ({
  type: 'UPDATE_SUCCESS',
  payload: user,
})

export const UpdateFailure = () => ({
  type: 'UPDATE_FAILURE',
})
