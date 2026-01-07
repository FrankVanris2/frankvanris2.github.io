import React, {useState} from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ title, tags = [],description, imageSrc, alignment, links = [] }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const containerClass = `project-card ${alignment}`;

    return (
        <div className={containerClass}>
            <div className="project-image">
                <img src={imageSrc} alt={`${title} Project`} />
            </div>
            <div className="project-content">
                <h2>{title}</h2>
                <div className="tech-stack">
                    {tags.map((tag, index) => (
                        <span key={index} className="tech-tag">{tag}</span>
                    ))}
                </div>
                <div className="description-container">
                    {isExpanded
                        ? description.map((para, index) => <p key={index}>{para}</p>)
                        : <p>{description[0]}</p>
                    }
                    {description.length > 1 && (
                        <button
                            className="read-more-btn"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? "Show Less ↑" : "Read More ↓"}
                        </button>
                    )}
                </div>
                {links.length > 0 && (
                    <div className="project-links">
                        {links.map((link, index) => (
                            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.text}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;