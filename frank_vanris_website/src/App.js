import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
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
            
            <p>Hi, I'm Frank Christopher van Ris</p>
            <p>This is my personal website</p>
            <p>Please Note: This is still a work of progress</p>
          </div>
        } />

        <Route path="/about_me" element={<AboutMe />} />
      </Routes>     
    </BrowserRouter> 
  );
}
export default App;
