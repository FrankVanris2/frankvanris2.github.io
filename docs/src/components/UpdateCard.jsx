import React, { useState} from "react";
import "../styles/UpdateCard.css";

const UpdateCard = ({ title, date, content, image}) => {
    const [expanded, setExpanded] = useState(false);
    const isMultiParagraph = Array.isArray(content) && content.length > 1;

    const visibleContent = expanded
        ? content
        : Array.isArray(content)
            ? [content[0]]
            : [content];
    return (
        <div className="update-card">
            {image && <img src={image} alt={title} className="update-image" />}
            <h2>{title} - {date}</h2>

            {visibleContent.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}

            {isMultiParagraph && (
                <button
                    className="read-more-btn"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? "Show Less" : "Read More"}
                </button>
            )}
        </div>
    );
};

export default UpdateCard;