import { projects } from '../data/projects'

function Projects({ onSelectProject }) {
    return (
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
                                onClick={() => onSelectProject(project)}
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
    )
}

export default Projects