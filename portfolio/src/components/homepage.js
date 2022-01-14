import './homepage.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Github from '../assets/GitHub-Mark.png';
import LinkedIn from '../assets/linkedin.png';

const Homepage = () => {
  return (
    <div className="homepage">

      <div className="homepageTitle">
        <h1 className="name">Zach Partin</h1>

        <span className="subtitle">Full-stack Software Developer</span>
      </div>

      <br />

      <Link to="/portfolio" className="portfolioLink">
        <Button variant="o" className="portfolioButton" >Check out my work!</Button> 
      </Link>

      <br/>

    <div className="profiles">
      <a href="https://github.com/zachpartin" className="profileLinks"> <img src={Github} className="profilePics"></img> </a>

      <br/>

      <a href="https://www.linkedin.com/in/zach-partin/" className="profileLinks"> <img src={LinkedIn} className="profilePics"></img> </a>

    </div>
      
    </div>
    
     )
}

export default Homepage;