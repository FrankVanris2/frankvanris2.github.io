import React from 'react';
import '../styles/LanguageBar.css';

const LanguageBar = ({ language, proficiency }) => {
    return (
        <div className="language-bar-container">
            <div className="language-name">{language}</div>
            <div className="language-level">{proficiency}</div>
        </div>
    );
};

export default LanguageBar;