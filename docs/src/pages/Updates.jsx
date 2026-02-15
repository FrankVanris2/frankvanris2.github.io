import React from 'react';
import { updates } from "../data/updates";
import { articles } from "../data/articles";
import UpdateCard from "../components/UpdateCard";
import ArticleCard from "../components/ArticleCard";
import '../styles/Updates.css';

const Updates = () => {
    const latestUpdates = updates.slice(0, 4); // show 3 newest
    const latestArticles = articles.slice(0, 5);
    const oldArticles = articles.slice(5);
    const archive = updates.slice(4); // everything else
    return (
        

        <div className="updates-container">
            <div className="updates-intro">
                <h1>My Blogs</h1>
                <p> This is my Blog Page! Here you will find Updates on my personal and professional life, as well as articles I've written on various topics related to technology, programming, and my experiences in the field. Feel free to explore the latest updates and articles below!
                </p>
            </div>
            <h2>Latest Updates</h2>
            <div className="featured-update">
                <UpdateCard {... latestUpdates[0]} />
            </div>
            <h2>Latest Articles</h2>
            <div className="articles-scroll">
                {latestArticles.map(article => (
                    <ArticleCard key={article.id} {...article} />
                ))}
            </div>
            
            <h3>Old Articles</h3>
            <div className="recent-scroll old-articles">
                {oldArticles.map(article => (
                    <ArticleCard key={article.id} {...article} />
                ))}
            </div>
            
            <h3 className="recent-title">Recent Updates</h3>
            <div className="recent-scroll">
                {latestUpdates.slice(1).map(update => (
                    <div key={update.id} className="recent-block">
                        <UpdateCard {...update} useModal={true} />
                    </div>
                ))}
            </div>

            

            <h2>Archive</h2>

            <div className="archive-scroll">
                {archive.map(update => (
                    <div key={update.id} className="archive-block">
                        <UpdateCard {...update} previewOnly={true} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Updates;