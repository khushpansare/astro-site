import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Mobile_Navbar from "../Components/Mobile_Navbar";

function Header_Main() {
  const [openDrawer, setDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setDrawer(!openDrawer);
    let navDrawer = document.getElementById("nav-drawer");
    navDrawer.classList.add("show-drawer");

    document.body.classList.add("no-scroll");

    let pageContent = document.getElementById("page-content");
    pageContent.classList.add("page-content");
  };

  const handleCloseDrawer = () => {
    setDrawer(!openDrawer);
    let navDrawer = document.getElementById("nav-drawer");
    navDrawer.classList.remove("show-drawer");

    document.body.classList.remove("no-scroll");

    let pageContent = document.getElementById("page-content");
    pageContent.classList.remove("page-content");
  };

  return (
    <>
      <header>
        <Navbar
          handleOpenDrawer={handleOpenDrawer}
          handleCloseDrawer={handleCloseDrawer}
          openDrawer={openDrawer}
        />
      </header>
      <Mobile_Navbar />
    </>
  );
}

export default Header_Main;
