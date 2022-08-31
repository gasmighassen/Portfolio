import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Works from '../Works/Works'
import './Main.css'
function Main() {
  return (
    <div className="container-main">
      <Navbar />

      <Home />

      <About />

      <Works />

      <Skills />
    </div>
  )
}

export default Main
