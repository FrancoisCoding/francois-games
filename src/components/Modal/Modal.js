import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

export default class componentName extends Component {
  render() {
    return <h1>Modal</h1>;
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
