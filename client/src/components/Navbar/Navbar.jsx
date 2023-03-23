import React, { Fragment } from "react";
import MainNav from "./MainNav";
import TopNav from "./TopNav";

const Navbar = () => {
  return (
    <Fragment>
      <TopNav />
      <MainNav />
    </Fragment>
  );
};

export default Navbar;
