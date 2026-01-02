import react from 'react';
import '../styles/AboutMe.css';

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <h1>About Me</h1>
            <div className="education-item">
                <img src="/BellevueCollege.jpg" alt="Bellevue College" />
                <p> I am a Graduate from Bellevue College with a Bachelors in Computer Science. I graduated in 2025, and 
                    I recently moved to the Netherlands on September 8th. I love software development, and programming. In general I absolutely 
                    love to work on my personal robotic projects, and experiment with software that is new in the market. 
                </p>
            </div>
            <div className="education-item">
                <img src="/DigiPen.jpg" alt="DigiPen" />
                <p>
                    Before I did my Bachelor's in Computer Science I did a Associates degree in Game Development as a Wanic Course in DigiPen that 
                    interconnected with my Highschool studies. During this time I learned how to program in C and C#, and I played around with Unity
                     a bunch.
                </p>
            </div>
            <p>
                During my free time I love to play video games, read books, hangout with friends and work on my personal projects. I also love to go hiking and explore nature.
                During the weekends I go day tripping around new parts of the Netherlands. One of my favorite spots so far is Giethoorn, the Venice of the North.
            </p>
            <p>Currently I am a full-time Junior Technical Developer for Intouch365, I am having so much fun working with the team, learning new technologies, and working 
                on new projects. My main focus is on Microsoft Power Platform, and Azure. I can't wait to share future updates on new exciting software I am working on!.
            </p>
            <h2>Favorite Videogame</h2>
            <p>One of my favorite videogames by far is <strong>No Man's Sky</strong>. Originally, I would have said Minecraft, but over the past couple of years, I can safely say that NMS has taken the top spot on my list. This game is absolutely massive; it contains over 16 quintillion planets that range across 255 galaxies. It's a massive universe for you as a player to explore. Not even in your lifetime could you manage to visit all of the planets in the game. Hello Games has achieved a massive feat in game development, and due to their continuous contributions to the game with massive updates, it will never lose its spark.</p>
            <div className="game-gallery">
                <img src="/NMS1.png" alt="No Man's Sky Screenshot 1" />
                <img src="/NMS2.png" alt="No Man's Sky Screenshot 2" />
                <img src="/NMS3.png" alt="No Man's Sky Screenshot 3" />
                <img src="/NMS4.png" alt="No Man's Sky Screenshot 4" />
            </div>
            <h2>Current Learning Goals</h2>
            <div className="learning-goals">
                <div className="goal-card">
                    <h3>🇳🇱 Learning Dutch</h3>
                    <p>
                        As of right now I have a handful of learning goals, right now I'm focusing a lot on learning Dutch as I just recently moved to the Netherlands. 
                        Every single day I put it at least 30 minutes to practice my Dutch by reading a book, reading a Dutch article, doing Duolingo, or watching a Dutch TV show. 
                        However, this studying plan is going to change as I plan to do a Dutch course this coming February in order to really improve my Dutch.
                    </p>
                </div>
                <div className="goal-card">
                    <h3>☁️ Azure & Power Platforms</h3>
                    <p>
                        Aside from learning Dutch, I am also focusing on learning Azure Technology and the usage of Power Platforms within the Microsoft Ecosystem. I plan on taking 
                        2 more certificates to complete my studies. And I am doing a lot of environment training within the Power Platforms ecosystem. I am also doing my best to do 
                        a LeetCode a day in order to keep my coding brain sufficient. However, I have to admit I've been a bit lazy with the LeetCode part recently.
                    </p>
                </div>
                <div className="goal-card">
                    <h3>💻 Web Development & Robotics</h3>
                    <p>
                        Lastly, I am right now learning a bit of web development of course in order to finish up this personal website about myself. I plan on putting more time after 
                        into doing more robotics related projects that I really enjoy doing. And I also plan to work on personal products that I would like to sell in the market. Whether it be 
                        software or hardware related.
                    </p>
                </div>
            </div>
            <h2>Life in the Netherlands</h2>
            <img src="/SecondWindmill.jpeg" alt="Second Windmill" className="small-image" />
            <div className="para-with-image">
                <img src="/DutchTreat.jpeg" alt="Dutch Treat" />
                <p>Living in the Netherlands has been an absolute journey. When I moved here I was jumping from Uncle to Uncle, I had to obtain a BSN number within 2 weeks which is needed in order to obtain a job. 
                    I also needed to get a bank account in order for employers to pay me. After settling those two things I was able to focus on finding a place to live. After 3 months of searching I was able to 
                    find a nice apartment here in Roosendaal. I have a fantastic view, and a very nice garden that I am currently remodeling a bit. During the weekends I love to do day trips, a couple of weeks ago I did 
                    a day trip to Antwerp in Belgium. I saw a lot of nice buildings and got to try out the famous Belgium fries and waffles. They were absolutely delicious!
                </p>
            </div>
            <div className="para-with-image right">
                <img src="/canal.jpeg" alt="Canal" />
                <p>
                    One of the best things I have noticed when moving here is how close everything is to one another. I don't need to drive or take a bus to a grocery store anymore. the closest Jumbo or Albert Hein is only a 
                    3-5 minute walk or bike ride. It's honestly a game changer. Not only that but transportation here is amazing! You do not need to rely on having a car 24/7, you can walk, bike, and train from city to city. 
                    I've taken multiple trips to bigger cities like Rotterdam, The Hague, and Antwerp just by train. It's super convenient and affordable as well.
                </p>
            </div>
            <div className="para-with-image">
                <img src="/Den Hague.jpeg" alt="Den Hague" />
                <p>
                    Another amazing highlight of living in the Netherlands is the Governmental benefits. As a resident here, I get to enjoy various benefits such as healthcare subsidies, and housing allowances. These benefits 
                    significantly ease the financial burden and enhance the quality of life. The Dutch healthcare system is top-notch, and having access to it at a subsidized rate is a huge relief. Additionally, 
                    the housing allowance has made it more affordable for me to live comfortably in my apartment. Overall, these governmental benefits have played a crucial role in helping me settle into life in the 
                    Netherlands smoothly.
                </p>
            </div>
            <h2>My Philosophy of Development</h2>
            <p>
                My philosophy of Development centers around a foundation of continuous learning, adaptability, and user-centric design. I believe that technology is ever-evolving, and as a developer, it is crucial to stay 
                updated with the latest trends and advancements. However, thanks to my mentors and professors it is as well important to have a strong grasp of the fundamentals. I've learned to expand and grow to understand 
                different development methedologies and software practices. 
            </p>
            <p>
                When it comes to building sofware and programming features, It is best to follow the SOLID principles, and ensure that the code is maintainable, 
                scalable, and efficient. 
            </p>
            <img src="/Solid.jpeg" alt="SOLID Principles" className="solid-image" /> 
            <p>
                But it is also greatly important to enjoy what you are doing as a developer. If the incentive for most people is to just make that big buck, then I don't truly see them fully as a 
                developer. You should be enjoying what you are doing, and loving the process of creating something new. 
            </p> 
            <p>
                Whether it be a small script that automates a task, or a massive software that changes the world. I think 
                the best developers in the world are the ones that truly love what they do, and are passionate about creating new things.
                Getting the right education and mindset is crucial in order to become a great developer. 
            </p>
            <p>
                I am thankful for all the mentors and professors that have helped me along my journey to becoming a developer. Every day 
                I strive to become a better developer than I was the day before, and I look forward to the challenges and opportunities that lie ahead in my development career.
            </p>
        </div>
    );
}

export default AboutMe;