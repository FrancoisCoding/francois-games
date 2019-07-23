import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import Search from "./Search";
import Tooltip from "@material-ui/core/Tooltip";
import ShortLoadScreen from "./PreLoad/ShortLoadScreen";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      isHovered: false
    };
    this._onButtonClick = this._onButtonClick.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true
    });
  }
  toggleHover() {
    this.setState(prevState => ({ isHovered: !prevState.isHovered }));
    console.log("hovered");
  }
  render() {
    return (
      <>
        {console.log(this.state)}
        {this.state.showComponent ? (
          <ShortLoadScreen
            call={() => this.setState({ showComponent: false })}
          />
        ) : null}
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 sticky">
          <Link to="/">
            <Tooltip title="Home" placement="right">
              <img
                src={logo}
                alt="Logo"
                className="navbar-brand"
                onClick={() => this._onButtonClick()}
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
              onClick={() => this._onButtonClick()}
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}
            >
              {this.state.isHovered ? (
                <i className="fas fa-envelope-open contactBtn" />
              ) : (
                <i className="fas fa-envelope contactBtn" />
              )}
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
                    <Link
                      to="/"
                      className="nav-link"
                      onClick={() => this._onButtonClick()}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="nav-link"
                      onClick={() => this._onButtonClick()}
                    >
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
