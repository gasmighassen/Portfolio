import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <p>Gm portfolio</p>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
        </ul>
        <p>Login</p>
      </div>
    </>
  )
}

export default Navbar
