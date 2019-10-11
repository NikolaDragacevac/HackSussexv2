import React from "react";
import PropTypes from "prop-types";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer className="is-white-bg is-grey margin-2 footer">
        Boilerplate made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by{" "}
        <a href="https://sld.codes" target="_blank" rel="noopener noreferrer">
          sld.codes
        </a>
        . Happy Hacking.
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
