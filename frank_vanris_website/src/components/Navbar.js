import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">
                MyWebsite</a>
            </div>
            <div className="navbar-center">
                <ul className="nav-links">
                    <li><a href="/about_me">About Me</a></li>
                    <li><a href="/experience">Experience</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/weekly_updates">Weekly Updates</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <a href="/my_logo" className="logo-icon">
                <i className="fas my-logo-icon"></i>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;