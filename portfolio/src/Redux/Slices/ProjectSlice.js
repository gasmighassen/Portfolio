import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  project: [
    {
      id: 1,
      name: 'Project 1',
      description: 'Description 1 jhqjkhdqjshq qjdshjqkshd qjshdkqjsd',
      image:
        'https://assets.awwwards.com/awards/element/2022/05/6290b57956871225102407.jpg',
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'Description 2',
      image:
        'https://assets.awwwards.com/awards/element/2022/05/6290b57956871225102407.jpg',
    },
    {
      id: 3,
      name: 'Project 3',
      description: 'Description 3',
      image:
        'https://assets.awwwards.com/awards/element/2022/05/6290b57956871225102407.jpg',
    },
    {
      id: 4,
      name: 'Project 4',
      description: 'Description 4',
      image:
        'https://assets.awwwards.com/awards/element/2022/05/6290b57956871225102407.jpg',
    },
    {
      id: 5,
      name: 'Project 5',
      description: 'Description 5',
      image:
        'https://assets.awwwards.com/awards/element/2022/05/6290b57956871225102407.jpg',
    },
    {
      id: 6,
      name: 'Project 6',
      description: 'Description 6',
      image:
        'https://assets.awwwards.com/awards/element/2022/05/6290b57956871225102407.jpg',
    },
  ],
}

const ProjectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.project.push(action.payload)
    },
    removeProject: (state, action) => {
      state.project = state.project.filter(el => el.id !== action.payload.id)
    },
  },
})

export const { addProject, removeProject } = ProjectSlice.actions
export default ProjectSlice.reducer
