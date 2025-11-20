import './App.css'

function App() {
  const projects = [  
    {
      title: 'Project Master Database (Intern Project)',
      description: 'Master data management system for organizations developed with the Laravel Framework',
      technologies: ['Laravel', 'PHP', 'MySQL','Tailwind CSS',],
      link: 'https://github.com/Decode357/Project_Master_Database'
    },
    // {
    //   title: 'Project 2',
    //   description: 'E-commerce platform with payment integration',
    //   technologies: ['React', 'Express', 'PostgreSQL'],
    //   link: '#'
    // },
    // {
    //   title: 'Project 3',
    //   description: 'Mobile-responsive portfolio website',
    //   technologies: ['Laravel', 'PHP', 'Tailwind CSS'],
    //   link: '#'
    // }
  ]

  const skills = [
    { category: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'] },
    { category: 'Backend', items: ['Laravel', 'MVC Architecture', 'Eloquent ORM'] },
    { category: 'Database', items: ['Firebase', 'MySQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Laragon', 'XAMPP'] },
    { category: 'Languages', items: ['Java','Python','JavaScript', 'PHP'] },
    { category: 'Design / UI Tools', items: ['Canva',] }
  ]

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">Portfolio</h2>
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
          <h1 className="hero-title">Hi, I'm <span className="highlight">Phongsakron Chingnu</span></h1>
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
                I'm a motivated and enthusiastic junior full-stack developer with a strong passion for building web applications. 
                Even though I'm a recent graduate, I enjoy learning new technologies and continuously improving my skills to create clean, efficient, and user-friendly solutions. 
              </p> 
              <p>
                With foundational experience in both frontend and backend development, 
                I focus on writing maintainable code and understanding how each part of a system works together. I'm excited to grow, take on new challenges, and contribute to real-world projects that make an impact. 
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
                <a href={project.link} className="project-link">Github →</a>
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
              <a href="mailto:dear0935780211@gmail.com" className="contact-link">
                📧 dear0935780211@gmail.com
              </a>
              <a href="https://github.com/Decode357" target="_blank" rel="noopener noreferrer" className="contact-link">
                🔗 GitHub
              </a>
              {/* <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
                💼 LinkedIn
              </a> */}
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
