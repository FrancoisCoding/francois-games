import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import styled from "styled-components";
import Search from "../Search/Search";
import Tooltip from "@material-ui/core/Tooltip";
import ShortLoadScreen from "../PreLoad/ShortLoadScreen";

const Navbar = (props) => {
  const [navbarState, setNavbarState] = useState({
    showComponent: false,
    isHovered: false,
  });

  const _onButtonClick = () => {
    setNavbarState({ showComponent: true });
  };

  const toggleHover = () => {
    setNavbarState({ isHovered: !navbarState.isHovered });
  };

  return (
    <>
      {navbarState.showComponent ? (
        <ShortLoadScreen
          call={() => setNavbarState({ showComponent: false })}
        />
      ) : null}
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 sticky">
        <Link to="/">
          <Tooltip title="Home" placement="right">
            <img
              src={logo}
              alt="Logo"
              className="navbar-brand"
              onClick={() => _onButtonClick()}
            />
          </Tooltip>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5" />
        </ul>
        <Search />
        <Tooltip title="Contact Us">
          <Link
            to="/contact"
            className="ml-auto"
            onClick={() => _onButtonClick()}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            {navbarState.isHovered ? (
              <i className="fas fa-envelope-open contactBtn" />
            ) : (
              <i className="fas fa-envelope contactBtn" />
            )}
          </Link>
        </Tooltip>

        <div
          onClick={(e) =>
            props.setTheme(
              props.theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
            )
          }
        >
          {props.theme.mode === "dark" ? (
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
                  <Link
                    to="/"
                    className="nav-link"
                    onClick={() => _onButtonClick()}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="nav-link"
                    onClick={() => _onButtonClick()}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <div
                    onClick={(e) =>
                      props.setTheme(
                        props.theme.mode === "dark"
                          ? { mode: "light" }
                          : { mode: "dark" }
                      )
                    }
                  >
                    {props.theme.mode === "dark" ? (
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
};

const NavWrapper = styled.nav`
  background: var(--mainGreen);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default Navbar;
