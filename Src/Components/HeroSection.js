import React from "react";
import "../Assets/CSS/Index.css";
import { Button } from "./Button";
import "../Assets/CSS/HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Mudasir Ali</h1>
      <p>Imagination to the Reality</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          link="https://www.fiverr.com/users/technique969"
        >
          Hire ME
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
          link="https://techmudboy.com"
        >
          Website <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
