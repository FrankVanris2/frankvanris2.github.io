import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="logo">MyWebsite</Link>
            </div>

            <div className="navbar-center">
                <ul className="nav-links">
                    <li><Link to="/about_me">About Me</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/weekly_updates">Weekly Updates</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

            <div className="navbar-right">
                <Link to="/my_logo" className="logo-icon">
                    <i className="fas my-logo-icon"></i>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
