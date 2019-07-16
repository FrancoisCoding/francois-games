import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./styled-components/Button";
import Footer from "../components/Footer";

export default class Details extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Extracts Values from React Context Provider */}
        <ProductConsumer>
          <div>
            <Link to="/">
              <ButtonContainer>back to products</ButtonContainer>
            </Link>
          </div>
        </ProductConsumer>
        <Footer />
      </React.Fragment>
    );
  }
}
