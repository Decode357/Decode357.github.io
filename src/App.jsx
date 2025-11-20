import './App.css'

function App() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A web application built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'E-commerce platform with payment integration',
      technologies: ['React', 'Express', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Project 3',
      description: 'Mobile-responsive portfolio website',
      technologies: ['React', 'CSS3', 'Vite'],
      link: '#'
    }
  ]

  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma'] }
  ]

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">MyPortfolio</h2>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm <span className="highlight">Your Name</span></h1>
          <p className="hero-subtitle">Full Stack Developer</p>
          <p className="hero-description">
            I build amazing web applications with modern technologies
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate full stack developer with experience in building web applications.
                I love creating elegant solutions to complex problems and learning new technologies.
              </p>
              <p>
                With a strong foundation in both frontend and backend development, I strive to create
                seamless user experiences while maintaining clean and efficient code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-category">
                <h3>{skill.category}</h3>
                <ul>
                  {skill.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">View Project →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p>I'm always open to new opportunities and collaborations.</p>
            <div className="contact-links">
              <a href="mailto:your.email@example.com" className="contact-link">
                📧 your.email@example.com
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
                🔗 GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 MyPortfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
