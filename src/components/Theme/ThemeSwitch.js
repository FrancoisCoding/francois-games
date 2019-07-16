import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
// If user selects dark first option will be displayed and if not second option will be displayed
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
    props.theme.mode === "dark" ? "#d3d3d3" : "white"};
}
.text-gold {
  color: ${props => (props.theme.mode === "dark" ? "white" : "gold")};
}
@media (min-width: 770px) {
&:hover {
  .card-footer {
    background: ${props =>
      props.theme.mode === "dark"
        ? "#d3d3d3 !important"
        : "rgba(247, 247, 247)"};
  }
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

`;
export default GlobalStyle;
