import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProject } from '../../Redux/Slices/ProjectSlice'

function AddProject() {
  const dispatch = useDispatch()
  const [Project, setProject] = useState({
    id: Math.random(),
    name: '',
    description: '',
    image: '',
  })
  return (
    <div className="add-project">
      <h1>Add project</h1>
      <div className="add-project-form">
        <div className="form-group">
          <h3>Project name</h3>
          <input
            onChange={e => setProject({ ...Project, name: e.target.value })}
            className="form-control"
            type="text"
            placeholder="Project name"
          />
          <h3>Project description</h3>
          <textarea
            onChange={e =>
              setProject({ ...Project, description: e.target.value })
            }
            className="form-control"
            type="text"
            placeholder="Project description"
          />
          <h3>Project preview image</h3>
          <input
            onChange={e => setProject({ ...Project, image: e.target.value })}
            className="form-control"
            type="file"
            placeholder="Project preview image"
            accept="image/*"
          />
          <button onClick={() => dispatch(addProject(Project))} className="add">
            Add to list
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddProject
