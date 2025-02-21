import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import Logo
import Logo from "../Assets/astro-logo.jpg";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";

function Navbar({ handleOpenDrawer, handleCloseDrawer, openDrawer }) {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <ul className="navlist">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/course">Courses</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact us</Link>
          </li>
        </ul>

        <div className="menu">
          <button onClick={openDrawer ? handleCloseDrawer : handleOpenDrawer}>
            {openDrawer ? (
              <CloseIcon sx={{ color: "#fff", fontSize: "35px" }} />
            ) : (
              <DragHandleIcon sx={{ color: "#fff", fontSize: "35px" }} />
            )}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
