import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import Search from "./Search";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    // Ref creation
    this.firstSection = React.createRef();
  }

  componentDidMount() {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {
      myFunction();
    };

    // Get the navbar
    const navbar = this.firstSection.current;

    // // Get the offset position of the navbar
    const sticky = navbar.offsetTop;

    // // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add(`sticky`);
      } else {
        navbar.classList.remove(`sticky`);
      }
    }
  }
  render() {
    return (
      <NavWrapper
        className="navbar navbar-expand-sm navbar-dark px-sm-5"
        ref={this.firstSection}
      >
        <Link to="/">
          <img src={logo} alt="commerce" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link
              to="/"
              className="nav-link"
              onClick={() => window.location.reload(true)}
            >
              products
            </Link>
          </li>
        </ul>
        <Search />
        <Link to="/favorites" className="ml-auto">
          <ButtonContainer>
            <span className="mr-1">
              <i className="fas fa-star" />
            </span>
            favorites
          </ButtonContainer>
        </Link>
        <div
          onClick={e =>
            this.props.setTheme(
              this.props.theme.mode === "dark"
                ? { mode: "light" }
                : { mode: "dark" }
            )
          }
        >
          {this.props.theme.mode === "dark" ? (
            <i className="fas fa-sun sun" />
          ) : (
            <i className="fas fa-moon moon" />
          )}
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainGreen);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
