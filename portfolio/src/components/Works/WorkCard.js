import React from 'react'
import './Card.css'

function WorkCard({ project }) {
  return (
    <div className="card-container">
      <div className="cards">
        <div className="card">
          <h2 className="card-title">{project.name}</h2>
          <img src={project.image} classalt="" />
          <p className="card-desc">{project.description}</p>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
