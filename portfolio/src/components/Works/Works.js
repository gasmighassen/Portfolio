import React from 'react'
import WorkCard from './WorkCard'
import './Works.css'
import { useSelector } from 'react-redux'

function Works() {
  const project = useSelector(state => state.project)
  return (
    <div className="works-container" id="work">
      <h1>Works</h1>
      <div className="work-list">
        {project.project.map(project => (
          <WorkCard project={project} />
        ))}
      </div>
    </div>
  )
}

export default Works
