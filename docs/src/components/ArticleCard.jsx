import React,  {useState} from "react";
import "../styles/ArticleCard.css";

const ArticleCard = ({title, date, content, image}) => {
    const [expanded, setExpanded] = useState(false);
    const isMultiParagraph = Array.isArray(content) && content.length > 1;

    const visibleContent = expanded ? content : [content[0]];

    return (
        <div className="article-card">
            {image && <img src={image} alt={title} className="article-image" />}
            <h2>{title}</h2>
            <h3>{date}</h3>
            {visibleContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
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

export default ArticleCard;