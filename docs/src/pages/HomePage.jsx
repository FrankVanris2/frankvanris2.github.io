import React from 'react';
import '../styles/HomePage.css';

function HomePage()  {
    return (
        <div className="home-container">
            {/* Hero Section: Image left, text right */}
            <section className="hero-section">
                <div className="profile-box">
                    <img src="/profile.jpg" alt="Frank Christopher van Ris" className="profile-image" />
                </div>
                <div className="intro-text">
                    <h2 className="hero-title">Hi, I'm Frank Christopher van Ris</h2>
                    <p className="hero-subtitle">This is my personal website. I'm a Backend Developer and Robotics enthusiast, with experience in Cloud Computing, Embedded Systems, and DevOps. I love experimenting with Robotics, and Software.</p>
                    <p className="hero-note">Stay tuned for weekly updates on my projects and articles!</p>
                    <p className="hero-work-in-progress"><em>Note: This site is a work in progress.</em></p>
                </div>
            </section>
            
            {/* Intentions Section */}
            <section className="intentions-section">
                <p>This website is designed to reflect my technical expertise and showcase reliable information about me. The following tabs will provide detailed insights into my background, experiences, projects, and updates. While the homepage remains simple, the tabs truly represent who I am.</p>
            </section>
            
            {/* Coming Soon Section */}
            <section className="coming-soon-section">
                <p>Articles and Updates coming soon...</p>
            </section>
        </div>
    );
}

export default HomePage;