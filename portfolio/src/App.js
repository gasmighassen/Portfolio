import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Works from './components/Works/Works'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="works">
        <Works />
      </div>

      <div id="skills">
        <Skills />
      </div>
    </>
  )
}

export default App
