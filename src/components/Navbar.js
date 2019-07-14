import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="commerce" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/favorites" className="ml-auto">
          <ButtonContainer>
            <span className="mr-1">
              <i className="fas fa-star" />
            </span>
            favorites
          </ButtonContainer>
        </Link>
        {/* <Link to="/cart">
          <ButtonContainer>
            <span className="mr-1">
              <i className="fas fa-shopping-cart" />
            </span>
            cart
          </ButtonContainer>
        </Link> */}
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
