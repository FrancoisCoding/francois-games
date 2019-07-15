import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class componentName extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="modalContainer">
                  <Link to="/">
                    <div onClick={() => closeModal()}>
                      <i className="fas fa-times-circle exit" />
                    </div>
                  </Link>
                  <video
                    src={value.detailProduct.clip.clips[640]}
                    type="video/mp4"
                    className="modalVideo"
                    autoPlay
                    controls
                    muted
                    loop
                    onMouseLeave={this.hoverHandler}
                  />
                </div>
              </ModalContainer>
            );
          }
          return;
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    width: 20rem;
    background: black;
  }
`;
