import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Logo from "../Assets/new_logo.png";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

function NavBar({ toggleDrawer, state, categoryData, handleNavigation }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorE2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorE2(null);
  };

  const abouthandleClick = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const { pathname } = useLocation();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "250px",
          },
        }}>
        <List className="ul">
          <IconButton
            sx={{ float: "right", paddingRight: "15px" }}
            onClick={toggleDrawer("right", false)}>
            <CloseIcon sx={{ color: "#8cb13d", fontSize: "35px" }} />
          </IconButton>
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "40px 0",
            }}>
            <Link className={`${isActive("/") ? "active1" : ""}`} to="/">
              <img src={Logo} alt="" width="120px" />
            </Link>
          </div>
          <ListItem>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}

              <Link
                to="/"
                // className="m-link"
                className={`${isActive("/") ? "active1" : ""}`}
                style={{ color: "black", textDecoration: "none" }}>
                Home
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}

              <Link
                to="/about"
                className="m-link"
                style={{ color: "black", textDecoration: "none" }}>
                About us
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={handleClick}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}

              <a
                type="button"
                style={{ color: "black", textDecoration: "none" }}>
                Product <KeyboardArrowDownIcon />
              </a>
            </ListItemButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}>
              {/* <MenuItem onClick={handleClose}>
                <Link
                  to="/courses/foundation"
                  style={{ color: "black", textDecoration: "none" }}>
                  Foundation Course
                  <ChevronRightIcon sx={{ fontSize: "17px" }} />
                </Link>
              </MenuItem> */}

              {categoryData.map((val, i) => {
                return (
                  <MenuItem onClick={handleClose}>
                    <a
                      onClick={() => handleNavigation(val)}
                      state={{ categoryName: val.value, categoryId: val.id }}>
                      {val.value}
                    </a>
                  </MenuItem>
                );
              })}
            </Menu>
          </ListItem>{" "}
          <ListItem>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}

              <Link
                to="/gallary"
                style={{ color: "black", textDecoration: "none" }}>
                Gallery
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Link
                to="/blog"
                style={{ color: "black", textDecoration: "none" }}>
                Blog
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Link
                to="/contact"
                style={{ color: "black", textDecoration: "none" }}>
                Contact
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default NavBar;
