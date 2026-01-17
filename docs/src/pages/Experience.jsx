import React from 'react';
import '../styles/Experience.css';
import LevelBar from '../components/LevelBar';
import LanguageBar from '../components/LanguageBar';
import OccupationBar from '../components/OccupationBar';

const Experience = () => {
    return (
        <div className="experience-wrapper">
            <div className="left-columns">
                <div className="languages-container">
                    <h2>🌍 Languages</h2>
                    <p>I speak three langauges with varying proficiency: </p>
                    <LanguageBar language="English" proficiency="Fluent"/>
                    <LanguageBar language="Spanish" proficiency="Conversational"/>
                    <LanguageBar language="Dutch" proficiency="Conversational"/>
                </div>
                <div className="certification-container">
                    <h2>🏅 Certifications</h2>
                    <p>Here are some certifications and achievements I've accomplished:</p>
                    <ul>
                        <li><strong>Azure Fundamentals AZ-900</strong></li>
                        <li><strong>Most Promising Innovation - Ready Tensor</strong></li>
                    </ul>
                </div>
                <div className="resume-container">
                    <h2>🔖 Resume:</h2>
                    <p>Here is my resume for those to see: </p>
                    <a href="/FrankVanrisResumeProfessional.pdf" download className="resume-button">
                        📄 Download My Resume
                    </a>
                </div>
            </div>
            <div className="experience-container">
                <h1>💼 Experience</h1>
                <p>Welcome to my experience page! I have a wide set of skills. When it comes to programming C++ and Python is where my strengths are. I 
                    also have experience with web development using HTML, CSS, and JavaScript. In addition to programming languages, I am also skilled 
                    in using various tools and frameworks such as React, Node.js, and Django. The following below indicates my efficiency in various skills:
                </p>

                <h2>Programming Languages 💻</h2>
                <p>These are the current programming languages that I have worked with before and the ranging experience between them all.</p>
                <LevelBar skill="C++" level="Expert" />
                <LevelBar skill="C" level="Expert" />
                <LevelBar skill="Python" level="Journeyman" />
                <LevelBar skill="JavaScript" level="Journeyman" />
                <LevelBar skill="TypeScript" level="Journeyman" />
                <LevelBar skill="HTML" level="Apprentice" />
                <LevelBar skill="CSS" level="Apprentice" />
                <LevelBar skill="Java" level="Journeyman" />
                <LevelBar skill="C#" level="Apprentice" />
                <LevelBar skill="Arm Assembly" level="Novice" />
                <LevelBar skill="SQL" level="Novice" />
            
                <h2>Frameworks & Libraries 📖</h2>
                <p>These are the frameworks and libraries I have worked with before and the ranging experience between them all.</p>
                <LevelBar skill="ROS2" level="Journeyman" />
                <LevelBar skill="TensorFlow" level="Apprentice" />
                <LevelBar skill="KNN" level="Apprentice" />
                <LevelBar skill="AWS" level="Journeyman" />
                <LevelBar skill="Azure" level="Apprentice" />
                <LevelBar skill="React" level="Journeyman" />
                <LevelBar skill="Node.js" level="Apprentice" />
                <LevelBar skill="Django" level="Novice" />
                <LevelBar skill="freeCAD" level="Expert" />
                <LevelBar skill="Fusion360" level="Journeyman" />
                <LevelBar skill="Microsoft Copilot Studio" level="Apprentice" />
                <LevelBar skill="Power Apps" level="Apprentice" />
                <LevelBar skill="Power Platform" level="Apprentice" />
                <LevelBar skill="Power Automate" level="Novice" />
                
                <h2>Development Environments 🏗️</h2>
                <p>I have worked on a lot of environments. The following are the environments that I have experience in.</p>
                <LevelBar skill="Visual Studio Code" level="Expert" />
                <LevelBar skill="Visual Studio" level="Journeyman" />
                <LevelBar skill="Arduino IDE" level="Expert" />
                <LevelBar skill="IntelliJ" level="Journeyman" />
                <LevelBar skill="Eclipse" level="Expert" />
                <LevelBar skill="MATLAB" level="Novice" />
                <LevelBar skill="PyCharm" level="Journeyman" />
                <LevelBar skill="Jupyter Notebook" level="Journeyman" />
                <LevelBar skill="Github" level="Expert" />
                <LevelBar skill="Git" level="Expert" />

                <h2>Operating Systems 📇</h2>
                <p>These are the operating systems I have worked on before.</p>
                <LevelBar skill="Windows" level="Expert" />
                <LevelBar skill="Linux" level="Expert" />
                <LevelBar skill="FreeRTOS" level="Apprentice" />
                <LevelBar skill="Raspberry Pi OS" level="Journeyman" />
                <LevelBar skill="Bare-Metal" level="Novice" />

                <h2>Development Methods 📜</h2>
                <p>These are the Development methodologies that I have worked with or have knowledge of.</p>
                <LevelBar skill="Agile" level="Expert" />
                <LevelBar skill="Scrum" level="Journeyman" />
                <LevelBar skill="Waterfall" level="Novice" />
                <LevelBar skill="RAD" level="Expert" />
                <LevelBar skill="TDD(Test Driven Development)" level="Apprentice" />
                <LevelBar skill="SOLID Principles" level="Journeyman" />

                <h2>Interfacing/Protocols/MCU's 🔘</h2>
                <p>These are the interfacing protocols and MCUs I have worked with or have knowledge of.</p>
                <LevelBar skill="Arduino" level="Master" />
                <LevelBar skill="Raspberry Pi" level="Journeyman" />
                <LevelBar skill="ESP32" level="Expert" />
                <LevelBar skill="UART" level="Expert" />
                <LevelBar skill="I2C" level="Expert" />
                <LevelBar skill="SPI" level="Journeyman" />

                <h2>Development Processes 👨‍💻</h2>
                <p>These are the development processes that I have experience with. Still working on improving.</p>
                <LevelBar skill="SDCL" level="Journeyman" />
                <LevelBar skill="CI/CD" level="Journeyman" />
                <LevelBar skill="Code Review" level="Apprentice" />
                <LevelBar skill="Version Control" level="Novice" />
            </div>

            <div className="right-columns">
                <div className="soft-skills-container">
                    <h2>🤝 Soft Skills</h2>
                    <p>Skills that help me collaborate and lead effectively:</p>
                    <ul>
                        <li><strong>Problem-Solving</strong></li>
                        <li><strong>Team Collaboration</strong></li>
                        <li><strong>Critical Thinking</strong></li>
                        <li><strong>Planning</strong></li>
                        <li><strong>Scheduling</strong></li>
                        <li><strong>Organization</strong></li>
                        <li><strong>Adaptability</strong></li>
                    </ul>
                </div>
                <div className="occupation-container">
                    <h2>👨‍💼 Occupations</h2>
                    <p>Current and previous occupations that I have done:</p>
                    <OccupationBar job="Intouch365" years="2025-present" link="https://intouch365.nl/" />
                    <OccupationBar job="Buddy Inc." years="2023-2025" />
                </div>
            </div>
        </div>
    );
}

export default Experience;