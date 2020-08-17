import React, { Component } from "react";
import Navbar from "./Navbar";

export default class Placeholder extends Component {
  render() {
    return <Navbar theme={this.props.theme} setTheme={this.props.setTheme} />;
  }
}
