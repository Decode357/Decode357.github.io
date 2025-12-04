import './App.css'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ProjectModal from './components/ProjectModal'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  // ควบคุม body scroll เมื่อเปิด/ปิด modal
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  return (
    <div className="portfolio">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects onSelectProject={setSelectedProject} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
