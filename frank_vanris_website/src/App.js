import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Updates from './pages/Updates';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="hero" role="banner" aria-label="Intro">
          <div className="hero-title-wrap">
            <span className="title-chip" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg" className="chip-svg" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="1.1" strokeOpacity="0.9"/>
                <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
                <rect x="11" y="6" width="6" height="4" rx="0.8" fill="currentColor" fillOpacity="0.8"/>
              </svg>
            </span>
            <h1 className="hero-title">Welcome to my <span className="accent">Website</span></h1>
          </div>
          <p className="hero-sub">Robotics · Electronics · Code</p>
        </header>
      </div>
      <Navbar />

      <Routes>
        <Route path="/" element = {
          <div>
            
            <h2>Hi, I'm Frank Christopher van Ris</h2>

            <p>This is my personal website, I'm not a real front-end developer. I am more of a Backend Developer and Robotics Developer. I'm also doing a lot of development
              within Cloud Computing and DevOps at the moment with my current company. But On the side I reaaallly love to mess around with technology. It is important for me to
              keep building my skills within Embedded Systems, Robotics and Software Development. So I decided to create this website to showcase some of my projects and share my 
              weekly updates on what I'm working on.
            </p>
            <p> Throughout the next couple of weeks feel free to see what updates pop up on this website of mine. I actually plan on writing my own articles through my website to give
              updates to those in the public who are interested in what I'm working on. So stay tuned!
            </p>
            <p>Please Note: This is still a work of progress</p>
          </div>
        } />

        <Route path="/about_me" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/weekly_updates" element={<Updates />} />
      </Routes>     
    </BrowserRouter> 
  );
}
export default App;
