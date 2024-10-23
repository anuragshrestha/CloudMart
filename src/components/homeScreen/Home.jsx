import React from "react";
import "./Home.css";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import model_image from "../assets/model_image.png"

export const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <h2>Welcome to Fashion</h2>
        <div>
          <div className="home-hand-icon">
            <p>better</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>designs</p>
          <p>for only you</p>
        </div>
        <div className="home-latest-button">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="home-right">
      <img src={model_image} alt="" /> 

      </div>
    </div>
  );
};
