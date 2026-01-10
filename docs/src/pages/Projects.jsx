import React from 'react';
import '../styles/Projects.css';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {

    //Website Project Specific Elements
    const websiteDescription = [
        "My latest project as of this moment, as you can probably guess by now is my website! This website is currently being developed through React Vite, a modern React Environment that relys on Typescript instead of Javascript. This project in general is my personal Portfolio, but I plan to add more slowly bit by bit to make it more lively to the audience. My intentions initially are to finish the general mvp's, and then to slowly expand the website.",
        "This new project of mine is basic in nature. I am not much of a frontend developer, and doing this project is indeed giving me some frontend experience. However my intentions for the future are clear. I plan to put most of my efforts into developing future projects that are embedded and robotics related. I also wish to expand my knowledge into future technologies and use cases. As of right now within this website I have established a total of 6 pages: Homepage, About Me page, Experience page, Projects page, Updates page, and Contacts page.",
        "Within the website I plan on also creating personal articles on future projects and future research that I would like to present to people. I might add some backend related components but for now this will be just a general portfolio that people can look at. I do also plan on adding more projects along the way to let users know what future endeavors I have been up to. I can't wait to share more on the upcoming projects after this one. In all, this is a basic web portfolio about me with basic future ideas that I plan on doing."
    ];
    const websiteTechStack = ["React", "Typescript", "JavaScript", "CSS", "HTML", "JSON"]

    // FollowBot Specific elements
    const followBotDescription = [
        "My team and I developed FollowBot, an autonomous robot designed to follow a person while avoiding obstacles. As our college capstone, we built both the hardware and software—3D‑printing custom parts in Fusion360 and FreeCAD, and prototyping early functionality with PlatformIO on an Arduino Uno Rev4 WiFi. We also created a React website with a Flask API to interact with the robot, with plans for a future mobile app.",
        "To support more advanced robotics tasks, we integrated a Raspberry Pi 5 with SSD storage for image processing and model training. Using ROS2 Jazzy, we connected all components of the robot, primarily programming in C++ with some Python. Our computer vision pipeline evolved from simple CNNs to YOLOv8 for object detection and tracking, built with OpenCV and TensorFlow.",
        "This project gave us hands‑on experience with embedded systems, robotics frameworks, machine learning, and web development. While we didn’t complete a fully functional robot, we built a strong foundation—and although development is paused, I fully intend to continue working on FollowBot in the future."
    ];
    const followBotTechStack = ["ROS2", "C++", "Python", "YOLOv8", "Raspberry Pi", "Arduino", "React", "Flask", "OpenCV", "TensorFlow", "Fusion360", "FreeCAD", "Embedded Systems"];

    // GadgetBuddy Specific elements
    const GadgetBuddyDescription = [
        "GadgetBuddy is a functional embedded device inspired by the PipBoy from the Fallout series, designed to bring practical survival tools into a real-world form factor. Over three months, you built a modular system that monitors temperature, humidity, air quality, time, and direction, all displayed across multiple navigable screens. The project emphasizes Test Driven Development, SOLID principles, and a flexible architecture that allows sensors and features to be swapped or extended with ease.",
        "Although not every planned feature made it into the MVP; such as the radio module, rotary encoder, and full battery integration, the final device demonstrates strong embedded engineering practices and a solid foundation for future expansion. You also documented the system thoroughly to help other hobbyists continue development, making GadgetBuddy both a personal achievement and an open platform for ongoing innovation."
    ];
    const GadgetBuddyTechStack = ["Arduino Uno", "ESP32", "Platform IO", "C/C++", "I2C", "Embedded Systems", "Test-Driven Development (TDD)", "SOLID architecture", "Git/GitHub", "Wokwi Simulator", "Modular architecture"]

    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <p> The Following projects below showcase my skills and experience in various programming languages, frameworks, and tools. Each project highlights my ability to apply my knowledge to real-world scenarios and solve complex problems. Feel free to explore the projects to see the range of my capabilities and the quality of my work.
            </p>

            <div className="current-project-sections">
                <h2 className="section-title">🚧 Project Currently Under Development</h2>
                <ProjectCard
                    title="My Personal Website"
                    tags={websiteTechStack}
                    description={websiteDescription}
                    imageSrc="/WebsiteProject.png"
                    alignment="right"
                    links={[
                        {text: "Frank Vanris Website Repo", url: "https://github.com/FrankVanris2/frankvanris2.github.io"}
                    ]}
                />
            </div>
            <div className="finalized-projects-section">
                <h2 className="section-title">✅ Finalized Projects</h2>
                <ProjectCard
                    title="FollowBot"
                    tags={followBotTechStack}
                    description={followBotDescription}
                    imageSrc="/FollowBotProject.PNG"
                    alignment="left"
                    links={[
                        { text: "FollowBot Legacy GitHub", url: "https://github.com/FrankVanris2/FollowBot_Legacy" },
                        { text: "ROS2 FollowBot Legacy GitHub", url: "https://github.com/FrankVanris2/ROS2_FollowBot_Legacy" }
                    ]}
                />

                <ProjectCard
                    title="GadgetBuddy"
                    tags={GadgetBuddyTechStack}
                    description={GadgetBuddyDescription}
                    imageSrc="/GadgetBuddy.jpeg"
                    alignment="right"
                    links={[
                        { text: "GadgetBuddy Repo", url: "https://github.com/FrankVanris2/GadgetBuddy"}
                    ]}
                />
            </div>
        </div>
    );
}

export default Projects;