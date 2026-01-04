import React from 'react';
import '../styles/LevelBar.css';

const LevelBar = ({ skill, level, color = 'var(--accent)' }) => {
    const levels = ['Novice', 'Apprentice', 'Journeyman', 'Expert', 'Master'];
    const currentLevelIndex = levels.indexOf(level) !== -1 ? levels.indexOf(level) : parseInt(level) - 1;

    return (
        <div className="level-bar-container">
            <div className="skill-name">{skill}</div>
            <div className="level-bar">
                {levels.map((lvl, index) => (
                    <div
                        key={lvl}
                        className={`level-segment ${index <= currentLevelIndex ? 'filled' : 'empty'}`}
                        style={{ backgroundColor: index <= currentLevelIndex ? color : '#333' }}
                    >
                        <span className="level-label">{lvl}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LevelBar;