import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ title, description, imageSrc, alignment, links = [] }) => {
    const containerClass = `project-card ${alignment}`;

    return (
        <div className={containerClass}>
            <div className="project-image">
                <img src={imageSrc} alt={`${title} Project`} />
            </div>
            <div className="project-content">
                <h2>{title}</h2>
                {description.map((para, index) => (
                    <p key={index}>{para}</p>
                ))}
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