import React from "react";
import "./Offers.css";
import offers from '../assets/offers.png'

export const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive offer</h1>
        <h1>Only for you</h1>
        <p>DISCOUNTS ONLY ON BEST SELLING PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={offers} alt="" />
      </div>
    </div>
  );
};
