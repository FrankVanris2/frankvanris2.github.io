import React,  {useState} from "react";
import Modal from "./Modal";
import "../styles/ArticleCard.css";

const ArticleCard = ({title, date, content, image}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="article-card">
            {image && <img src={image} alt={title} className="article-image" />}
            <h2>{title}</h2>
            <h3>{date}</h3>
            <p>{content[0]}</p>
            <button className="read-more-btn" onClick={() => setIsOpen(true)}>
                Read More
            </button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h2>{title}</h2>
                <h3>{date}</h3>
                {image && <img src={image} alt={title} className="article-image" />}
                {content.map((paragraph, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                ))}
            </Modal>
        </div>
    );
};

export default ArticleCard;