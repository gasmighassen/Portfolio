import React from 'react'
import './About.css'

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-info">
        <img src="/img/profile.jpg" alt="" className="photo" />
        <div className="about-info-text">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            nesciunt delectus et! Corporis iusto placeat reiciendis totam
            laudantium delectus eius?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
            alias.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
