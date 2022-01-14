import ChristmasList from '../assets/christmaslist.png';
import JASZLibrary from '../assets/jaszlibrary.png';
import MartialMart from '../assets/martialmart.png';
import './portfolio.css';

const Portfolio = () => {


  return (
  <div className="portfolioPage">
    <div className="portfolioHeader">
      <h1 className="portfolioHeader">Portfolio</h1>
    </div>

    <div className="portfolioLinks">
      
        <br />
        <div className="portfolioPiece">
        <span className="title">Virtual Christmas List</span>
          <a href="https://clever-clarke-51a296.netlify.app" className="portfolioLink">
          <img src={ChristmasList} className="portfolioImgs"/>
          <br/>
          </a>
          
          <br />
          
        <span className="portfolioDescription">An app for posting Christmas wishes</span>
        </div>

        <br />
        
        <div className="portfolioPiece">
          <span className="title">The Library</span>
        <a href="https://jasz-library.netlify.app/" className="portfolioLink">
          <img src={JASZLibrary} className="portfolioImgs"/>
          <br/>
          </a>
          
          <br />
          
          <span className="portfolioDescription">A full-CRUD app that allows users to edit an inventory of books</span>
          </div>
        
        <br />
        
        <div className="portfolioPiece">
          <span className="title">Martial Mart</span>
        <a href="https://martial_mart.surge.sh/" className="portfolioLink">
          <img src={MartialMart}  className="portfolioImgs"/>
          <br/>
        </a>
        <br />
          <span className="portfolioDescription">Allows users to post used martial arts equipment for sale</span>
          </div>
      </div>
  </div>
  )
}

export default Portfolio;