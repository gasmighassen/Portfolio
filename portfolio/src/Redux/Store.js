import { configureStore } from '@reduxjs/toolkit'
import ProjectSlice from './Slices/ProjectSlice'
import UserSlice from './Slices/UserSlice'

const store = configureStore({
  reducer: {
    project: ProjectSlice,
    user: UserSlice,
  },
})

export default store
