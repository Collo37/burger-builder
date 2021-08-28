import React from "react";
import classes from "./HamburgerMenu.module.css";

const HamburgerMenu = (props) => {
  return (
    <div className={classes.Hamburger} onClick={props.clicked}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerMenu;
