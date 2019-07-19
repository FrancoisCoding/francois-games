import React, { Component } from "react";
import logo from "../../logo.png";

export default class PreLoadScreen extends Component {
  constructor(props) {
    super(props);

    // Ref creation
    this.PreLoadScreen = React.createRef();
  }
  componentDidMount() {
    const PreLoadScreen = this.PreLoadScreen.current;
    window.onload = function() {
      window.setTimeout(fadeout, 4000); //4 seconds
    };

    function fadeout() {
      PreLoadScreen.style.display = "block"
        ? (PreLoadScreen.style.display = "none")
        : (PreLoadScreen.style.display = "block");
    }
  }
  render() {
    return (
      <div className="preload" id="preload" ref={this.PreLoadScreen}>
        <div className="logo">
          <img src={logo} alt="commerce" className="navbar-brand" />
          <h1 className="preloadHeader">Francois Coding</h1>
        </div>
        <div className="loader-frame">
          <div className="loader1" id="loader1" />
          <div className="loader2" id="loader2" />
        </div>
      </div>
    );
  }
}
