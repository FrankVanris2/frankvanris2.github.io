import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import ContactIcon from './ContactIcon';
import PhoneDropdown from './PhoneDropdown';

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
                    <li><Link to="/weekly_updates">Blogs</Link></li>
                </ul>
            </div>

            <div className="navbar-right">
                {/* Contact Icons */}
                <ContactIcon
                    href="mailto:frankcvanris@gmail.com"
                    label="Email"
                    ariaLabel="Email: frankcvanris@gmail.com"
                >
                    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M3 8l9 6 9-6M3 8v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </ContactIcon>

                <ContactIcon
                    href="https://www.linkedin.com/in/frankcvanris/"
                    label="LinkedIn"
                    ariaLabel="LinkedIn"
                >
                    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                    </svg>
                </ContactIcon>

                <ContactIcon
                    href="https://github.com/FrankVanris2"
                    label="GitHub"
                    ariaLabel="GitHub"
                >
                    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.186.092-.921.35-1.545.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
                    </svg>
                </ContactIcon>

                <PhoneDropdown phone="+31 6 34 49 63 21" />

                <Link to="/pong" className="logo-icon" aria-label="Play Pong">
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
