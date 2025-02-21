import React from "react";

import Logo from "../Assets/anand_logo.png";
import { Link } from "react-router-dom";

function MobileNavbar({ toggleDrawer, isDrawerOpen }) {
  return (
    <>
      <div className="drawer-container">
        <button className="menu-icon" onClick={toggleDrawer}>
          &#9776;
        </button>
        <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
          <button className="close-icon" onClick={toggleDrawer}>
            &times;
          </button>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <nav className="drawer-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>

              <li className="dropdown">
                <Link to="/products" className="dropbtn">
                  Products
                </Link>
                <div className="dropdown-content">
                  <Link to="/services/service1">Service 1</Link>
                  <Link to="/services/service2">Service 2</Link>
                  <Link to="/services/service3">Service 3</Link>
                </div>
              </li>

              <li>
                <Link to="/gallary">Gallary</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className={`backdrop ${isDrawerOpen ? "visible" : ""}`}
          onClick={toggleDrawer}></div>
      </div>
    </>
  );
}

export default MobileNavbar;
