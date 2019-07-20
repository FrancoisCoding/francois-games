import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import Search from "./Search";
import Tooltip from "@material-ui/core/Tooltip";

export default class Navbar extends Component {
  render() {
    // const classes = useStyles();
    return (
      <>
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 sticky">
          <Link to="/">
            <Tooltip title="Home" placement="right">
              <img src={logo} alt="Logo" className="navbar-brand" />
            </Tooltip>
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5" />
          </ul>
          <Search />
          <Tooltip title="Contact Us">
            <Link to="/contact" className="ml-auto">
              <i className="fas fa-id-card contactBtn" />
            </Link>
          </Tooltip>
          {/* <Tooltip title="View saved favorites">
            <Link to="/favorites" className="ml-auto favoritesBtn">
              <ButtonContainer>
                <span className="mr-1">
                  <i className="fas fa-star" />
                </span>
                favorites
              </ButtonContainer>
            </Link>
          </Tooltip> */}
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
              <Tooltip title="Change to Light Theme">
                <i className="fas fa-sun sun themeChanger" />
              </Tooltip>
            ) : (
              <Tooltip title="Change to Dark Theme">
                <i className="fas fa-moon moon themeChanger" />
              </Tooltip>
            )}
          </div>
        </NavWrapper>
        <div className="menu-wrap">
          <input type="checkbox" className="toggler" />
          <div className="hamburger">
            <div />
          </div>
          <div className="menu">
            <div>
              <div>
                <ul>
                  <li>
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                  <li>
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
                        <p className="a">Change to Light Theme</p>
                      ) : (
                        <p className="a">Change to Dark Theme</p>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
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
