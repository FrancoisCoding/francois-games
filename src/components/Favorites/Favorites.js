import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";

export default class Favorites extends Component {
  static contextType = ProductConsumer;
  render() {
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          {/* Extracts Values from React Context Provider */}
          <ProductConsumer>
            {value => (
              // Div for card image
              <div
                className="img-container p-5"
                onClick={() => {
                  return value.handleDetail(value.detailProduct.id);
                }}
              >
                {/* Created link wrapping image so it displays video in fullscreen on click */}
                <a href={value.detailProduct.clip.clip}>
                  {/* If the image is being hovered over display video else display image */}
                  {this.state.isImg ? (
                    <img
                      src={value.detailProduct.background_image}
                      alt="product"
                      className="card-img-top"
                      onMouseEnter={this.hoverHandler}
                    />
                  ) : (
                    <video
                      src={value.detailProduct.clip.clip}
                      type="video/mp4"
                      className="card-img-top video"
                      width="200px"
                      height="130px"
                      autoPlay
                      muted
                      loop
                      onMouseLeave={this.hoverHandler}
                    />
                  )}
                </a>
              </div>
            )}
          </ProductConsumer>
        </div>
      </ProductWrapper>
    );
  }
}

// Used styled components to create card dynamically
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.3s ease-in;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.8s linear;
  }
  @media (min-width: 500px) {
    &:hover {
      .card {
        border: 0.04rem solid rgba(0, 0, 0, 0.2);
        box-shadow: 0px 5px 30px dimgray;
      }
      .card-footer {
        background: rgba(247, 247, 247);
      }
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
`;
