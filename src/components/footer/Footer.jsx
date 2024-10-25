import React from "react";
import footer_logo from "../assets/logo_big.png";
import "./Footer.css";
import instagram_icon from "../assets/instagram_icon.png";
import github_icon from "../assets/github_icon.png"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>FASHION</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={github_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @2024 - All Right reserved by Anurag Shrestha </p>
      </div>
    </div>
  );
};
