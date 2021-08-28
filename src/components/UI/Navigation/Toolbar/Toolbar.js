import React from "react";
import Logo from "../../../Logo/Logo";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <HamburgerMenu clicked={props.open} />
      <Logo height="80%" />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
