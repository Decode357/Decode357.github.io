import { skills } from '../data/skills'

function Skills() {
    return (
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
    )
}

export default Skills