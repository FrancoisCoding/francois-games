import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import Footer from "../components/Footer";

export default class Details extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Extracts Values from React Context Provider */}
        <ProductConsumer>
          {value => (
            <React.Fragment>
              {console.log("details value", value.detailProduct)}
              <div className="container py-5">
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanted text-green my-5">
                    <h1>{value.detailProduct.name}</h1>
                  </div>
                </div>
              </div>
              {/* End Title */}
              {/* Product Info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img
                    src={value.detailProduct.background_image}
                    className="img-fluid"
                    alt="Game"
                  />
                </div>
                {/* Product Text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>title: {value.detailProduct.name}</h2>
                  <h4 className="text-green">
                    <strong>
                      release date : {value.detailProduct.released}
                    </strong>
                  </h4>
                  <h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      screenshots:
                    </p>
                  </h4>
                </div>
                <div />
                }
                <video
                  src={value.detailProduct.clip.clip}
                  type="video/mp4"
                  width="320"
                  height="240"
                  autoPlay
                  muted
                  loop
                />
              </div>
              {/* Buttons */}
              <div>
                <Link to="/">
                  <ButtonContainer>back to products</ButtonContainer>
                </Link>
              </div>
              <div />
            </React.Fragment>
          )}
        </ProductConsumer>
        <Footer />
      </React.Fragment>
    );
  }
}
