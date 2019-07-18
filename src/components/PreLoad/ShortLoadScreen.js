import React, { Component } from "react";
import logo from "../../logo.png";

export default class ShortLoadScreen extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.props = props;
    // Ref creation
    this.ShortLoadScreen = React.createRef();
  }
  componentDidMount() {
    const ShortLoadScreen = this.ShortLoadScreen.current;
    window.onclick = () => {
      ShortLoadScreen.style.display = "block";
      const run = () => {
        fadeout();
        this.props.call();
        window.onclick = undefined;
      };
      window.setTimeout(run, 1000); //1 seconds
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
