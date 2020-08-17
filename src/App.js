import React, { useState, useEffect } from "react";
import storage from "local-storage-fallback";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Placeholder from "./components/Navbar/Placeholder";
import Modal from "./components/Modal/Modal";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/Theme/ThemeSwitch";
import PreLoadScreen from "./components/PreLoad/PreLoadScreen";
import SuccessSound from "./components/Sound/SuccessSound";
import ShortLoadScreen from "./components/PreLoad/ShortLoadScreen";

import { useDispatch } from "react-redux";
import { setGames } from "./actions";
import Routes from "./components/Routes/Routes";

function App() {
  function getInitialTheme() {
    const savedTheme = storage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : { mode: "light" };
  }
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(getInitialTheme);
  const [showComponent, setShowComponent] = useState(false);
  const [sound, setSound] = useState(false);

  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    setTimeout(() => setSound(true), 4000);
  }, []);

  function _onButtonClick() {
    setShowComponent(true);
  }
  return (
    <ThemeProvider theme={theme}>
      <>
        {showComponent ? (
          <ShortLoadScreen call={() => setShowComponent(false)} />
        ) : null}
        <PreLoadScreen />
        {sound && <SuccessSound />}
        <GlobalStyle />
        <Placeholder theme={theme} setTheme={setTheme} />
        <Routes buttonClick={_onButtonClick} />
        <Modal />
      </>
    </ThemeProvider>
  );
}

export default App;
