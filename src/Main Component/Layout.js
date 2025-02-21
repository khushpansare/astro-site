import React from "react";
import PropTypes from "prop-types";
import Header_Main from "../Wrappers/Header_Main";
import Footer_Main from "../Wrappers/Footer_Main";

function Layout({ children }) {
  return (
    <>
      <Header_Main />
      <div id="page-content">{children}</div>
      {/* <Footer_Main /> */}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
