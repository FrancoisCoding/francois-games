import React, { useLayoutEffect, useRef } from "react";
import logo from "../../logo.png";

const PreLoadScreen = (props) => {
  const PreLoadScreenRef = useRef(null);

  useLayoutEffect(() => {
    window.onload = function () {
      window.setTimeout(fadeout, 4000); //4 seconds
    };

    const fadeout = () => {
      PreLoadScreenRef.current.style.display = "block"
        ? (PreLoadScreenRef.current.style.display = "none")
        : (PreLoadScreenRef.current.style.display = "block");
    };
  }, []);

  return (
    <div className="preload" id="preload" ref={PreLoadScreenRef}>
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
};

export default PreLoadScreen;
