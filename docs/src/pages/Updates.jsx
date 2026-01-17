import React from 'react';
import { updates } from "../data/updates";
import { articles } from "../data/articles";
import UpdateCard from "../components/UpdateCard";
import ArticleCard from "../components/ArticleCard";
import '../styles/Updates.css';

const Updates = () => {
    const latestUpdates = updates.slice(0, 4); // show 3 newest
    const archive = updates.slice(4); // everything else
    return (
        

        <div className="updates-container">
            <div className="updates-intro">
                <h1>Updates & Articles</h1>
                <p>This page is where I will posting weekly updates on the things I have been doing for the past couple of days in a week. There will be nothing grand for now,
                    especially how bland this page is at the moment. But later on you will see updates on what life has been like in the Netherlands.
                </p>
            </div>
            <h2>Latest Updates</h2>
            <div className="featured-update">
                <UpdateCard {... latestUpdates[0]} />
            </div>
            <h2>Latest Articles</h2>
            <div className="articles-scroll">
                {articles.map(article => (
                    <ArticleCard key={article.id} {...article} />
                ))}
            </div>
            <h3 className="recent-title">Recent Updates</h3>
            <div className="recent-scroll">
                {latestUpdates.slice(1).map(update => (
                    <div key={update.id} className="recent-block">
                        <UpdateCard {... update} />
                    </div>
                ))}
            </div>

            <h2>Archive</h2>

            <div className="archive-scroll">
                {archive.map(update => (
                    <details key={update.id} className="archive-block">
                        <summary>{update.title} - {update.date}</summary>
                        <div className="archive-content">
                            <UpdateCard {...update} />
                        </div>
                    </details>  
                ))}
            </div>
        </div>
    );
}

export default Updates;