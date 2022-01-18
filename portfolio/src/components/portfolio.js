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

        <a href="https://clever-clarke-51a296.netlify.app" className="portfolioLink">
        <span className="title">Virtual Christmas List</span>
          
          <img src={ChristmasList} className="portfolioImgs"/>
          <br/>
          
          
          <br />
          
        <span className="portfolioDescription">An app for posting Christmas wishes</span>

        </a>
        </div>

        <br />
        
        <div className="portfolioPiece">

          <a href="https://jasz-library.netlify.app/" className="portfolioLink">
            
          <span className="title">The Library</span>
      
          <img src={JASZLibrary} className="portfolioImgs"/>
          <br/>
          
          
          <br />
          
          <span className="portfolioDescription">A full-CRUD app that allows users to edit an inventory of books</span>

          </a>

        </div>
        
        <br />
        
        <div className="portfolioPiece">

          <a href="https://martial_mart.surge.sh/" className="portfolioLink">
            
          <span className="title">Martial Mart</span>
        
          <img src={MartialMart}  className="portfolioImgs"/>
          <br/>
        
        <br />
          <span className="portfolioDescription">Allows users to post used martial arts equipment for sale</span>

          </a>

        </div>
      </div>
  </div>
  )
}

export default Portfolio;