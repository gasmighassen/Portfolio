import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    username: 'user',
    password: '123456',
  },
  isAuth: false,
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userlogin: (state, action) => {
      if (
        action.payload.username === state.user.username &&
        action.payload.password === state.user.password
      ) {
        state.isAuth = true
        localStorage.setItem('token', true)
      }
    },
    userlogout: state => {
      state.isAuth = false
      localStorage.removeItem('token')
    },
  },
})

export const { userlogin, userlogout } = UserSlice.actions
export default UserSlice.reducer
