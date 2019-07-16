import React, { useState, useEffect } from "react";
import storage from "local-storage-fallback";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Favorites from "./components/Favorites";
import Default from "./components/Default";
import Modal from "./components/Modal";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props =>
    props.theme.mode === "dark" ? "#111" : "#e0e0d1"};
}
.gameTitlesHeader {
  color : ${props => (props.theme.mode === "dark" ? "white" : "#4f5d73")};
}
.footer {
  background-color: ${props =>
    props.theme.mode === "dark" ? "#111" : "#76c2af"};
    color: ${props => (props.theme.mode === "dark" ? "white" : undefined)};
}
.card {
  background-color: ${props =>
    props.theme.mode === "dark" ? "darkgray" : "white"};
}
.text-gold {
  color: ${props => (props.theme.mode === "dark" ? "white" : "gold")};
}
&:hover {
  .card-footer {
    background: ${props =>
      props.theme.mode === "dark"
        ? "darkgray !important"
        : "rgba(247, 247, 247)"};
  }
}
.metacritic-green {
  color: ${props => (props.theme.mode === "dark" ? "white" : "limegreen")};
}
.metacritic-yellow {
  color: ${props =>
    props.theme.mode === "dark" ? "white" : "var(--mainYellow)"};
}
.metacritic-red {
  color: ${props => (props.theme.mode === "dark" ? "white" : "red")};
}
.navbar {
  background: ${props =>
    props.theme.mode === "dark" ? "black" : "var(--mainGreen)"};
}
.jpYPDy {
  border-color: ${props =>
    props.theme.mode === "dark" ? "white !important" : "var(--controller)"};
  color: ${props =>
    props.theme.mode === "dark" ? "white !important" : "var(--controller)"};
}
`;

function getInitialTheme() {
  const savedTheme = storage.getItem("theme");
  return savedTheme ? JSON.parse(savedTheme) : { mode: "light" };
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Navbar theme={theme} setTheme={setTheme} />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
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
