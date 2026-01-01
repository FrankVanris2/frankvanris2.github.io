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
            
            {/* Current job occupation Section */}
            <section className="occupation-section">
                <img src="/IntouchLogo.jpg" alt="Intouch365" className="occupation-image" />
                <div className="occupation-text">
                    <h2>Current Occupation</h2>
                    <p>I am currently employed at Intouch365 as a Technical Developer. As a Technical Developer at Intouch365, 
                        I work on designing and implementing integrations and automation solutions within the Microsoft ecosystem — 
                        primarily using Power Platform and Azure technologies. My role involves both client-facing and internal 
                        product development responsibilities, contributing to innovative solutions that streamline workflows and 
                        enhance operational efficiency.</p>
                </div>
            </section>

            {/* Greatest Achievements Section */}
            <section className="additional-section right-align">
                <img src="/myTeam.jpg" alt="Greatest Achievement" className = "right-image" />
                <div className="text-content">
                    <h2>Greatest Achievement of 2025</h2>
                    <p>The greatest achievement that I have accomplished in 2025 has been many, ranging from 
                        moving to the Netherlands, Obtaining a job after graduating 3 months before. And accomplishing
                        a personal project during the summer. But none of these compare to the greatest achievement.
                    </p>
                    <p>
                        While working on the capstone project FollowBot with a team of 4 members. We were nominated for the
                        Computer Vision Project Expo of 2024. We were quite unsure if we were going to obtain a award of some sort.
                        But on January 15th, 2025 we were announced as the winners for the <strong>Most Promising Innovation</strong>. It was a complete
                        shock to us all, and I am so proud of the team for this accomplishment.
                    </p>
                    <p>
                        Our work on allowing our robot to follow the user based on YOLO was one of the most challenging aspects of our project.
                        Although we weren't able to finalize such a feature, we have established the foundation for future developers to continue
                        building upon YOLO. Check out <a href="https://app.readytensor.ai/publications/following-mechanics-with-our-yolo-model-hdKQGDqLbZsZ" target="_blank" rel="noopener noreferrer">our publication</a> on the topic. And we can't wait to see what the future holds with such fantastic technology.
                    </p>
                </div>
                

            </section>

            {/* Coming Soon Section */}
            <section className="coming-soon-section">
                <p>Articles and Updates coming soon...</p>
            </section>
        </div>
    );
}

export default HomePage;