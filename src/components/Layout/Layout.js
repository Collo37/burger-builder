import React, { useState } from "react";

import Aux from "../../hoc/Aux";
import SideDrawer from "../UI/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../UI/Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";

const Layout = (props) => {
  const [sideDrawerState, setSideDrawerState] = useState({
    showSideDrawer: false,
  });

  const sideDrawerClosedHandler = () => {
    setSideDrawerState({
      showSideDrawer: false,
    });
  };

  const sideDrawerOpenHandler = () => {
    setSideDrawerState({
      showSideDrawer: true,
    });
  };
  return (
    <Aux>
      <Toolbar open={sideDrawerOpenHandler} />
      <SideDrawer
        open={sideDrawerState.showSideDrawer}
        closed={sideDrawerClosedHandler}
      />
      <div>BackDrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
