import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./styled-components/Button";
import Footer from "../components/Footer";
import DetailsInfo from "./DetailsInfo";

export default class Details extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Extracts Values from React Context Provider */}
        <ProductConsumer>
          {value => {
            const { slug } = value.detailProduct;
            console.log("slug", slug);
          }}
        </ProductConsumer>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}
