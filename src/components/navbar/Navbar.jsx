import React, { useContext, useState, useRef } from "react";
import "./Navbar.css";
import logo from "./../assets/logo.png";
import cart_icon from "./../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import dropdown_icon from './../assets/dropdown_icon.png'

const Navbar = () => {
  //use state to keep track of the curent screen and show border
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const drop_down = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
 }
 
  return (
    <div className="navbar"> 
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>FASHION</p>
      </div>
      <img className="nav-dropdown" onClick={drop_down} src={dropdown_icon} alt="" />
      <ul  ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          {" "}
          <Link style={{textDecoration:'none'}} to="/"> Shop </Link> {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{textDecoration:'none'}} to="/mens"> Men </Link> {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link style={{textDecoration:'none'}} to="/womens"> Women </Link> {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link  style={{textDecoration:'none'}} to="/kids"> Kid </Link> {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button> Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
