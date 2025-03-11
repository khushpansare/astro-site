import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Assets/astro-logo.jpg";

function Mobile_Navbar({ handleCloseDrawer }) {
  return (
    <>
      <div className="nav-drawer" id="nav-drawer">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <ul className="mobile-navlist">
          <li>
            <Link to="/" onClick={handleCloseDrawer}>
              Home
            </Link>
          </li>
          <li onClick={handleCloseDrawer}>
            <Link to="/about">About us</Link>
          </li>
          <li onClick={handleCloseDrawer}>
            <Link to="/course">Courses</Link>
          </li>
          <li onClick={handleCloseDrawer}>
            <Link to="/services">Services</Link>
          </li>
          <li onClick={handleCloseDrawer}>
            <Link to="/products">Products</Link>
          </li>
          <li onClick={handleCloseDrawer}>
            <Link to="/contact-us">Contact us</Link>
          </li>
        </ul>
      </div>
      <div id="overlay" className="overlay"></div>
    </>
  );
}

export default Mobile_Navbar;
