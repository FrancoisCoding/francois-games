import React, { Component } from "react";
import logo from "../../logo.png";

export default class ShortLoadScreen extends Component {
  constructor(props) {
    super(props);

    // Ref creation
    this.ShortLoadScreen = React.createRef();
  }
  componentDidMount() {
    const ShortLoadScreen = this.ShortLoadScreen.current;
    console.log("screen", ShortLoadScreen);
    window.onclick = function() {
      ShortLoadScreen.style.display = "block";
      window.setTimeout(fadeout, 1000); //2 seconds
    };

    function fadeout() {
      ShortLoadScreen.style.display = "none";
    }
  }
  render() {
    return (
      <div className="preload" id="preload" ref={this.ShortLoadScreen}>
        <div className="logo">
          <img src={logo} alt="commerce" className="navbar-brand" />
          <h1 className="shortHeader">Francois Coding</h1>
        </div>
        <div className="loader-frame">
          <div className="loader1" id="loader1" />
          <div className="loader2" id="loader2" />
        </div>
      </div>
    );
  }
}
