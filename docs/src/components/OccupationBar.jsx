import React from 'react';
import '../styles/OccupationBar.css';

const OccupationBar = ({job, years, link}) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="occupation-bar-link">
            <div className="occupation-bar-container">
                <div className="job-name">{job}</div>
                <div className="year-frame">{years}</div>
            </div>
        </a>
    );
};

export default OccupationBar;