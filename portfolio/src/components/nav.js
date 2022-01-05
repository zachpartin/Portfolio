import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {


  return (
    <nav className="nav">
      <Link to="/aboutme" className="navLinks">About Me</Link>
      <Link to="/resume" className="navLinks">Resume</Link>
      <Link to="/portfolio" className="navLinks">Portfolio</Link>
    </nav>
  )
}

export default Nav;