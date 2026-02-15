import React, { useState} from "react";
import Modal from "./Modal";
import "../styles/UpdateCard.css";

const UpdateCard = ({ title, date, content, image, useModal = false, previewOnly = false }) => {
    const [expanded, setExpanded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isMultiParagraph = Array.isArray(content) && content.length > 1;

    if (previewOnly) {
        // Preview mode - shows only title and date as clickable summary
        return (
            <>
                <div className="update-preview" onClick={() => setIsModalOpen(true)}>
                    <h3>{title}</h3>
                    <p className="preview-date">{date}</p>
                </div>

                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <h2>{title}</h2>
                    <h3>{date}</h3>
                    {image && <img src={image} alt={title} className="update-image" />}
                    {Array.isArray(content) ? (
                        content.map((paragraph, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                        ))
                    ) : (
                        <p dangerouslySetInnerHTML={{ __html: content }} />
                    )}
                </Modal>
            </>
        );
    }

    if (useModal) {
        // Modal mode
        return (
            <div className="update-card">
                {image && <img src={image} alt={title} className="update-image" />}
                <h2>{title}</h2>
                <h3>{date}</h3>
                <p>{Array.isArray(content) ? content[0] : content}</p>
                <button className="read-more-btn" onClick={() => setIsModalOpen(true)}>
                    Read More
                </button>

                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <h2>{title}</h2>
                    <h3>{date}</h3>
                    {image && <img src={image} alt={title} className="update-image" />}
                    {Array.isArray(content) ? (
                        content.map((paragraph, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                        ))
                    ) : (
                        <p dangerouslySetInnerHTML={{ __html: content }} />
                    )}
                </Modal>
            </div>
        );
    }

    // Inline expand mode (default)
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