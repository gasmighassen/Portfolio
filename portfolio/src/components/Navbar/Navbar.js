import React from 'react'
import './Navbar.css'
import { HashLink } from "react-router-hash-link"

function Navbar() {
  return (
    <>
      <div className="navbar">
        <p>Gm portfolio</p>
        <ul>
          <li>
            <HashLink to="#home" smooth>Home</HashLink>
          </li>
          <li>
            <HashLink to="#about" smooth>About</HashLink>
          </li>
          <li>
            <HashLink to="#work" smooth>Works</HashLink>
          </li>
          <li>
            <HashLink to="#skills" smooth>Skills</HashLink>
          </li>
        </ul>
        <p>Login</p>
      </div>
    </>
  )
}

export default Navbar
