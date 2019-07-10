import React, { Component } from "react";
import styled from "styled-components";

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <h1>&copy;FrancoisCoding</h1>
      </FooterWrapper>
    );
  }
}

const FooterWrapper = styled.nav`
  background: var(--mainGreen);
`;
