import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeProject } from '../../Redux/Slices/ProjectSlice'
import './ProjectList.css'

function ProjectList() {
  const project = useSelector(state => state.project)
  const dispatch = useDispatch()

  return (
    <div className="d-list-project">
      <h1>List of projects</h1>
      <div className="d-list">
        {project.project.map((project, index) => (
          <div className="project-">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button
              className="delete"
              onClick={() => dispatch(removeProject({ id: project.id }))}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList
