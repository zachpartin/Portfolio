import './App.css';
import Homepage from './components/homepage.js';
import Aboutme from './components/aboutme';
import Nav from './components/nav';
import Resume from './components/resume';
import Portfolio from './components/portfolio.js';
import Contact from './components/contact.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
  <Router>
    <div className="App">
      <Nav />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/aboutme" element={<Aboutme />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    
      </div>
    </Router>
  );
}

export default App;
