import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";

const Navbar = () => {

    const[menu,setMenu]=useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Company Logo" />
        <p>SHOPPER</p>
        <ul className="nav-menu">
          <li onClick={() => {setMenu("shop")}}>
            <NavLink to="/">Shop {menu === "shop" ? <hr/> : <></>}</NavLink>
          </li>
          <li onClick={() =>{setMenu("men")}}>
            <NavLink to="men">
            Men {menu === "men" ? <hr/> :<></>}
            </NavLink>
            
          </li>
          <li onClick={() => {setMenu("women")}}>
            <NavLink to="women">
            Women {menu === "women" ? <hr/> :<></>}
            </NavLink>
           
          </li>
          <li onClick={() => {setMenu("kids")}}>
           <NavLink to="kids">
           Kids {menu === "kids" ? <hr/> : <></>}
           </NavLink>
          </li>
        </ul>
        <div className="nav-login-cart">
            <NavLink to="login"><button>Login</button></NavLink>
            <NavLink to="cart"><img src={cartIcon} alt="Company Logo"/></NavLink>
            <div className="nav-cart-count">34</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
