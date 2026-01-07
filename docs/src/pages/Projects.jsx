import React from 'react';
import '../styles/Projects.css';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {

    // FollowBot Specific elements
    const followBotDescription = [
        "My team and I developed FollowBot, an autonomous robot designed to follow a person while avoiding obstacles. As our college capstone, we built both the hardware and software—3D‑printing custom parts in Fusion360 and FreeCAD, and prototyping early functionality with PlatformIO on an Arduino Uno Rev4 WiFi. We also created a React website with a Flask API to interact with the robot, with plans for a future mobile app.",
        "To support more advanced robotics tasks, we integrated a Raspberry Pi 5 with SSD storage for image processing and model training. Using ROS2 Jazzy, we connected all components of the robot, primarily programming in C++ with some Python. Our computer vision pipeline evolved from simple CNNs to YOLOv8 for object detection and tracking, built with OpenCV and TensorFlow.",
        "This project gave us hands‑on experience with embedded systems, robotics frameworks, machine learning, and web development. While we didn’t complete a fully functional robot, we built a strong foundation—and although development is paused, I fully intend to continue working on FollowBot in the future."
    ];
    const followBotTechStack = ["ROS2", "C++", "Python", "YOLOv8", "Raspberry Pi", "Arduino", "React", "Flask", "OpenCV", "TensorFlow", "Fusion360", "FreeCAD", "Embedded Systems"];

    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <p> The Following projects below showcase my skills and experience in various programming languages, frameworks, and tools. Each project highlights my ability to apply my knowledge to real-world scenarios and solve complex problems. Feel free to explore the projects to see the range of my capabilities and the quality of my work.
            </p>

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
        </div>
    );
}

export default Projects;