import React, { Component } from "react";
import styled from "styled-components";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../actions";

const Modal = () => {
  const state = useSelector((state) => state);
  const modalOpen = state.game.modalOpen;
  const dispatch = useDispatch();

  return (
    <>
      {!modalOpen ? null : (
        <ModalContainer>
          {/* If user clicks outside of video the modal closes */}
          <ClickAwayListener onClickAway={() => dispatch(closeModal())}>
            <Player
              playsInline
              muted
              fluid={false}
              poster={state.game.detailProduct.background_image}
              src={state.game.detailProduct.clip.clips[640]}
            />
          </ClickAwayListener>
        </ModalContainer>
      )}
    </>
  );
};

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

export default Modal;
