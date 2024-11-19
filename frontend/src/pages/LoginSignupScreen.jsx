import React from "react";
import "./CSS/LoginSignupScreen.css";

export const LoginSignupScreen = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign up</h1>

        <div className="loginsignup-fields">
          <input type="text" placeholder="Enter your full name" />
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter a password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};
