import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  // ควบคุม body scroll เมื่อเปิด/ปิด modal
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  const projects = [  
    {
      title: 'Project Master Database (Intern Project)',
      description: 'Master data management system for organizations developed with the Laravel Framework',
      technologies: ['Laravel', 'PHP', 'MySQL','Tailwind CSS',],
      link: 'https://github.com/Decode357/Project_Master_Database',
      images: [
        '/images/PJ1-1-1.png',
        '/images/PJ1-1.png',
        '/images/PJ1-2.png',
        '/images/PJ1-3.png',
        '/images/PJ1-4.png',
        '/images/PJ1-5.png',
        '/images/PJ1-6.png',
        '/images/PJ1-7.png',
        '/images/PJ1-8.png',
      ],
      fullDescription: 'A comprehensive master data management system built during my internship. Features include data validation, role-based access control, and real-time updates.'
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
    { 
      category: 'Frontend', 
      items: [
        { name: 'React', icon: '/images/icons/react.png', link: 'https://react.dev/' },
        { name: 'HTML5', icon: '/images/icons/html5.png', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { name: 'CSS3', icon: '/images/icons/css3.png', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { name: 'Tailwind CSS', icon: '/images/icons/tailwind.png', link: 'https://tailwindcss.com/docs' },
      ]
    },
    { 
      category: 'Backend', 
      items: [
        { name: 'Laravel', icon: '/images/icons/laravel.png', link: 'https://laravel.com/docs' },
        { name: 'MVC Architecture', icon: '/images/icons/mvc.png', link: 'https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller' },
        { name: 'Eloquent ORM', icon: '/images/icons/eloquent.png', link: 'https://laravel.com/docs/eloquent' }
      ]
    },
    { 
      category: 'Database', 
      items: [
        { name: 'Firebase', icon: '/images/icons/firebase.png', link: 'https://firebase.google.com/docs' },
        { name: 'MySQL', icon: '/images/icons/mysql.png', link: 'https://dev.mysql.com/doc/' }
      ]
    },
    { 
      category: 'Tools', 
      items: [
        { name: 'Git', icon: '/images/icons/git.png', link: 'https://git-scm.com/doc' },
        { name: 'Docker', icon: '/images/icons/docker.png', link: 'https://docs.docker.com/' },
        { name: 'VS Code', icon: '/images/icons/vscode.png', link: 'https://code.visualstudio.com/docs' },
        { name: 'Laragon', icon: '/images/icons/laragon.png', link: 'https://laragon.org/docs/' },
        { name: 'XAMPP', icon: '/images/icons/xampp.png', link: 'https://www.apachefriends.org/index.html' }
      ]
    },
    { 
      category: 'Languages', 
      items: [
        { name: 'Java', icon: '/images/icons/java.png', link: 'https://docs.oracle.com/en/java/' },
        { name: 'Python', icon: '/images/icons/python.png', link: 'https://docs.python.org/3/' },
        { name: 'JavaScript', icon: '/images/icons/javascript.png', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'PHP', icon: '/images/icons/php.png', link: 'https://www.php.net/docs.php' }
      ]
    },
    { 
      category: 'Design', 
      items: [
        { name: 'Canva', icon: '/images/icons/canva.png', link: 'https://www.canva.com/learn/' }
      ]
    }
  ]

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">
          <img src="/images/logo.png" alt="logo" className="logo-logo"/>
            Portfolio
          </h2>
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
                    <li key={i}>
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="skill-link"
                      >
                        <img src={item.icon} alt={item.name} className="skill-icon" />
                        <span>{item.name}</span>
                      </a>
                    </li>
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
                <div className="project-actions">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="project-preview-btn"
                  >
                    Preview
                  </button>
                  <a href={project.link} className="project-link">GitHub →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Preview Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              ✕
            </button>
            <h2>{selectedProject.title}</h2>
            <div className="modal-images">
              {selectedProject.images?.map((image, idx) => (
                <img key={idx} src={image} alt={`${selectedProject.title} preview ${idx + 1}`} />
              ))}
            </div>
            <p className="modal-description">{selectedProject.fullDescription}</p>
            <div className="modal-tech">
              {selectedProject.technologies.map((tech, i) => (
                <span key={i} className="tag">{tech}</span>
              ))}
            </div>
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              GitHub
            </a>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p>I'm always open to new opportunities and collaborations.</p>
            <div className="contact-links">
              <a href="mailto:dear0935780211@gmail.com" className="contact-link-1">
                <img src="/images/gmail-ic.png" alt="Gmail" className="contact-icon-1" /> dear0935780211@gmail.com
              </a>
              <a href="https://github.com/Decode357" target="_blank" rel="noopener noreferrer" className="contact-link-2">
                <img src="/images/github-ic.png" alt="GitHub" className="contact-icon-2" /> Decode357
              </a>
              {/* LinkedIn ตัวอย่าง */} 
              {/* <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
                <img src="/icons/linkedin.png" alt="LinkedIn" className="contact-icon" /> LinkedIn
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
