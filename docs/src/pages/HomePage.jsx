import React from 'react';
import '../styles/HomePage.css';

function HomePage()  {
    return (
        <div className="home-container">
            {/* Hero Section: Image left, text right */}
            <section className="hero-section">
                <img src="/profile.jpg" alt="Frank Christopher van Ris" className="profile-image" />
                <div className="intro-text">
                    <h2>Hi, I'm Frank Christopher van Ris</h2>
                    <p>This is my personal website. I'm a Backend Developer and Robotics enthusiast, with experience in Cloud Computing, Embedded Systems, and DevOps. I love experimenting with Robotics, and Software.</p>
                    <p>Stay tuned for weekly updates on my projects and articles!</p>
                    <p><em>Note: This site is a work in progress.</em></p>
                </div>
            </section>
        </div>
    );
}

export default HomePage;