import React from "react";
import "../Assets/CSS/Card.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Hey, This is just a Prototype!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/static/PICS/webiste-pic.png"
              text="Click on the website link to check my own website."
              label="Website"
            />
            <CardItem
              src="/static/PICS/protype.jpg"
              text="This is just a Prototype to show other people what I can create."
              label="Info"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
