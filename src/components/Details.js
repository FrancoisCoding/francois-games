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
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
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
        </ProductWrapper>
        <Footer />
      </React.Fragment>
    );
  }
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.8s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.8s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.8s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.8s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
