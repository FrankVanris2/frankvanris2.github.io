import React from 'react';
import '../styles/Projects.css';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {

     // Intouch365 Support Portal
    const supportDescription = [
        "The Intouch365 Support Portal is a comprehensive Power apps Application designed to streamline and enhance customer support operations. Developed using Microsoft Power Apps, Power Pages, Power Automate, and Dataverse, this portal serves as a centralized platform for managing customer inquiries, and tickets.",
        " The portal features a user-friendly interface that allows support agents to efficiently track and resolve customer issues. Key functionalities include ticket creation, ticket management, and real-time updates on ticket status. The integration with Dataverse ensures that all customer data is securely stored and easily accessible.",
        " The Intouch365 Support Portal also uses a technical stack within Power Pages that allows me as a developer to enhance things through code using HTML, CSS, and JavaScript or TypeScript. This flexibility allows for customizations and enhancements to meet specific business needs.",
        "Overall, the Intouch365 Support Portal is a powerful tool that improves customer support efficiency and enhances the overall customer experience."
    ];
    const supportTechStack = ["Microsoft Power Apps", "Power Pages", "Power Automate", "Dataverse", "HTML", "CSS", "JavaScript", "TypeScript"]

    //Website Project Specific Elements
    const websiteDescription = [
        "My website is a fully completed project built using React Vite, a modern React environment that relies on TypeScript instead of JavaScript. It serves as my personal portfolio, designed to showcase my work in a clean and structured way. The core MVPs have been completed, and the site is now fully launched, with future updates planned only to enhance the experience rather than finish it.",
        "This project is simple in nature but meaningful in purpose. While frontend development isn’t my primary focus, building this site gave me valuable experience in UI, layout, and user‑oriented design. My long‑term direction remains centered on embedded systems, robotics, and emerging technologies. The website currently includes six completed pages: Homepage, About Me, Experience, Projects, Updates, and Contacts.",
        "With the site now established, I plan to publish personal articles on future projects, research topics, and technical explorations I want to share. Backend components may be added later, but for now the site functions as a complete and accessible portfolio. I’ll continue adding new projects over time so visitors can follow along with my latest work. Overall, this is a finalized web portfolio that introduces who I am and outlines the ideas and projects I aim to pursue moving forward."
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

            <div className="current-project-section">
                <h2 className="section-title">🚧 Project Currently Under Development</h2>
                <p className="centered">Projects that are under <strong>development</strong> will be placed here.</p>
                

            </div>

            <div className="maintained-projects-section">
                <h2 className="section-title">🔧 Maintained Projects</h2>
                <ProjectCard 
                    title="Intouch365 Support Portal"
                    tags={supportTechStack}
                    description={supportDescription}
                    imageSrc="/IntouchSupport.png"
                    alignment="left"
                    links={[{ text: "Intouch365 Support Portal Link", url: "https://intouch365-supportportaal.powerappsportals.com"}]}
                />

                <ProjectCard
                    title="My Personal Website"
                    tags={websiteTechStack}
                    description={websiteDescription}
                    imageSrc="/Website_Final_Addition.png"
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