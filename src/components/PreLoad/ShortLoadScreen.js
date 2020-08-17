import React, { useLayoutEffect, useRef } from "react";
import logo from "../../logo.png";

const ShortLoadScreen = (props) => {
  const ShortLoadScreenRef = useRef(null);

  useLayoutEffect(() => {
    window.onclick = () => {
      ShortLoadScreenRef.current.style.display = "block";
      const run = () => {
        fadeout();
        props.call();
        window.onclick = undefined;
      };
      window.setTimeout(run, 1000); //1 seconds
    };
    function fadeout() {
      if (ShortLoadScreenRef.current !== null) {
        ShortLoadScreenRef.current.style.display = "none";
      }
    }
  }, [props]);

  return (
    <div className="preload" id="preload" ref={ShortLoadScreenRef}>
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
};

export default ShortLoadScreen;
