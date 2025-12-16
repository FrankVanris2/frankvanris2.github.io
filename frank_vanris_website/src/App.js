import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Welcome to my Website!</h1>
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
