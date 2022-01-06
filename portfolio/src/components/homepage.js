import './homepage.css'
import {Link} from 'react-router-dom'

const Homepage = () => {
  return (
    <div className="homepage">
      <h1 className="name">Zach Partin</h1>
      <span className="subtitle">Full-stack Software Developer</span>
      <br /><br />
      <Link to="/portfolio" className="portfolioLink">
      <span > Check out my work!</span>
      </Link>
    </div>
    
     )
}

export default Homepage;