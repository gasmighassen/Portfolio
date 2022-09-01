import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <div className="Skills" id="skills">
      <div className="skills-header">
        <h1>Skills</h1>
        <div className="skill-progression">
          <p>HTML</p>
          <div class="container">
            <div class="skill html">90%</div>
          </div>

          <p>CSS</p>
          <div class="container">
            <div class="skill css">80%</div>
          </div>

          <p>JavaScript</p>
          <div class="container">
            <div class="skill js">65%</div>
          </div>

          <p>PHP</p>
          <div class="container">
            <div class="skill php">60%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
