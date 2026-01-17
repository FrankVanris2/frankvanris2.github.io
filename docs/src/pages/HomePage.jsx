import React from 'react';
import '../styles/HomePage.css';
import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";

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
                    <p>
                        I have reached several milestones in 2025, ranging from moving to the Netherlands and 
                        securing a job just three and a half months after graduation, to completing a personal project 
                        over the summer. However, one achievement stands out above the rest.
                    </p>
                    <p>
                        While working on the capstone project "FollowBot" with a team of four, we were 
                        nominated for the Computer Vision Project Expo. We were unsure if we would receive 
                        an award, but on January 15th, 2025, we were named winners of the <strong>Most Promising Innovation</strong> award. It was a complete shock to us all, 
                        and I am incredibly proud of our team for this accomplishment.
                    </p>
                    <p>
                        Enabling our robot to follow a user based on YOLO was one of the most challenging 
                        aspects of the project. Although we didn't finalize the feature, we established a 
                        strong foundation for future developers to build upon. Check out <a href="https://app.readytensor.ai/publications/following-mechanics-with-our-yolo-model-hdKQGDqLbZsZ" target="_blank" rel="noopener noreferrer"> our publication</a> on the topic; we can't wait to see what the future holds for this fantastic technology.
                    </p>
                </div>
                

            </section>

            {/* Coming Soon Section */}
            <section className="articles-section">
                <h2>📰 Latest Articles</h2>
                <div className="articles-scroll">
                    {articles.slice(0, 10).map(article => (
                    <div key={article.id} className="article-block">
                        <ArticleCard {...article} />
                    </div>
                    ))}
                </div>
                <a href="/updates" className="view-more-link">View More Articles →</a>
            </section>
        </div>
    );
}

export default HomePage;