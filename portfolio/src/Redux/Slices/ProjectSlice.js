import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  project: [
    {
      id: 1,
      name: 'Works',
      description: 'website that will be used to create websites',
      image:
        'https://assets.awwwards.com/awards/element/2022/05/6290b57956871225102407.jpg',
    },
    {
      id: 2,
      name: 'BMES',
      description: 'website for a interior designing company',
      image:
        'https://cdn.dribbble.com/users/454178/screenshots/13117334/media/37734d6a2b50e472798ae927051b99f8.png?compress=1&resize=400x300',
    },
    {
      id: 3,
      name: 'Arjun G',
      description: 'Digital marketing service website',
      image:
        'https://assets.materialup.com/uploads/2a6bb717-aa29-454b-a01f-5cae54c98db9/preview.jpg',
    },
    {
      id: 4,
      name: 'CAS',
      description: 'Website for interior designing company',
      image: 'https://miro.medium.com/max/1400/0*lgYoOpEYOkb-AGQ2.png',
    },
    {
      id: 5,
      name: 'Fashioned',
      description: 'E-commerce clothing products',
      image:
        'https://i.pinimg.com/originals/21/bc/e7/21bce774115e270f33399a6ae03d6794.jpg',
    },
    {
      id: 6,
      name: 'IronChan',
      description: ' Hosting services',
      image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4cc28332931093.5c18cb73b0830.gif',
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
