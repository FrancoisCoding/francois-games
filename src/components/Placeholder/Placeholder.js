import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";

const Placeholder = (props) => {
  return <Navbar theme={props.theme} setTheme={props.setTheme} />;
};

export default Placeholder;
