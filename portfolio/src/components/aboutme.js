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
        <p>I am a recent graduate of General Assembly's software engineering
          immersive program, and am looking to break into the field and begin my career as a developer.</p>
        <br />
        <p>I graduated from Virginia Commonwealth University in 2020, and have a diverse background ranging from restaurant work to construction, as well as leadership positions on my college rugby team.</p>
        <br />
        <p>In my personal time, I enjoy weightlifting, hiking, and kickboxing. I love doing things that push me physically and mentally, and so far love the challenge that learning to program has provided me. I look forward to the opportunity to prove myself to be a competent and valuable member of a development team.</p>
      </div>
    </div>
  );
};

export default Aboutme;
