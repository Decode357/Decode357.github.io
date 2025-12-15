function ProjectModal({ project, onClose }) {
    if (!project) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    ✕
                </button>
                <h2>{project.title}</h2>
                <div className="modal-images">
                    {project.images?.map((image, idx) => (
                        <img key={idx} src={image} alt={`${project.title} preview ${idx + 1}`} />
                    ))}
                </div>
                <p className="modal-description">{project.fullDescription}</p>
                <div className="modal-tech">
                    {project.technologies.map((tech, i) => (
                        <span key={i} className="tag">{tech}</span>
                    ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    GitHub
                </a>
            </div>
        </div>
    )
}

export default ProjectModal