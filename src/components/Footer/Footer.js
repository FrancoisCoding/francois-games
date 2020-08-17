import React, { Component } from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    // Footer Setup
    <FooterWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 footer">
      <h1>&copy;FrancoisCoding</h1>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.nav`
  background: var(--mainGreen);
`;

export default Footer;
