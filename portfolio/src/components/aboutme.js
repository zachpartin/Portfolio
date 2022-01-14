import "./aboutme.css";
import Hiking from "../assets/hiking.jpeg";

const Aboutme = () => {
  return (
    <div className="aboutMe">
      <h1 className="aboutMeHeader">About Me</h1>
      <br />
      <img src={Hiking} className="aboutMePic" />
      <br />
      <div className="aboutMeP">
        <p>Hi! I'm Zach (The one on the right) </p>
        <br />
        <p>
          I am a recent graduate of General Assembly's software engineering
          immersive program, and am looking to break into the field and begin my career.
        </p>
        <br />
        <p>I graduated from Virginia Commonwealth University in 2020, and have a diverse background ranging from restaurant work to construction, as well as leadership positions on my college rugby team.</p>
        <br />
        <p>I love taking on new challenges in all aspects of my life, and look forward to the opportunity to apply this attitude to a role as a software developer!</p>
      </div>
    </div>
  );
};

export default Aboutme;
