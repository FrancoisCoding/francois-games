import React, { useState, useEffect } from "react";
import storage from "local-storage-fallback";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Placeholder from "./components/Placeholder";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Favorites from "./components/Favorites";
import Default from "./components/Default";
import Modal from "./components/Modal";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/Theme/ThemeSwitch";
import PreLoadScreen from "./components/PreLoad/PreLoadScreen";
import SuccessSound from "./components/Sound/SuccessSound";
import DetailsInfo from "./components/DetailsInfo";
import Contact from "./components/Contact";

function App() {
  function getInitialTheme() {
    const savedTheme = storage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : { mode: "light" };
  }
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  const [sound, setSound] = useState(false);
  useEffect(() => {
    setTimeout(() => setSound(true), 4000);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <>
        <PreLoadScreen />
        {sound && <SuccessSound />}
        <GlobalStyle />
        <Placeholder theme={theme} setTheme={setTheme} />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={DetailsInfo} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
          <Route path="/favorites" component={Favorites} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </>
    </ThemeProvider>
  );
}

export default App;
