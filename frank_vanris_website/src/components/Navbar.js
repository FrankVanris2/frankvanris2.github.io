import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="logo" aria-label="Frank Van Ris Home">
                    <span className="chip" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="robot-svg" aria-hidden="true">
                            <rect x="3" y="5" width="18" height="14" rx="2" ry="2" fill="none" stroke="currentColor" strokeOpacity="0.9" strokeWidth="1.1"></rect>
                            <rect x="8" y="9" width="3" height="3" rx="1" fill="currentColor" fillOpacity="0.95"></rect>
                            <rect x="13" y="9" width="3" height="3" rx="1" fill="currentColor" fillOpacity="0.95"></rect>
                            <rect x="9.5" y="14.5" width="5" height="1.6" rx="0.8" fill="currentColor" fillOpacity="0.6"></rect>
                            <circle cx="18.2" cy="6.0" r="0.8" fill="currentColor" fillOpacity="0.9"></circle>
                        </svg>
                    </span>
                    <span className="logo-text">Frank Van Ris</span>
                    <span className="led" aria-hidden="true"></span>
                </Link>
            </div>

            <div className="navbar-center">
                <ul className="nav-links">
                    <li><Link to="/about_me">About</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/weekly_updates">Updates</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

            <div className="navbar-right">
                <Link to="/my_logo" className="logo-icon" aria-label="Personal logo">
                    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.9"></rect>
                        <circle cx="8.5" cy="11" r="1.4" fill="currentColor" fillOpacity="0.9"></circle>
                        <circle cx="15.5" cy="11" r="1.4" fill="currentColor" fillOpacity="0.6"></circle>
                    </svg>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
