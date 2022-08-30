import { configureStore } from '@reduxjs/toolkit'
import ProjectSlice from './Slices/ProjectSlice'

const store = configureStore({
  reducer: {
    project: ProjectSlice,
  },
})

export default store
