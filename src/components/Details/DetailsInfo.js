import React, { Component } from "react";
import Details from "./Details";
import { useSelector } from "react-redux";

const DetailsInfo = (props) => {
  const state = useSelector((state) => state);
  console.log("STATE FROM DETAILS INFO", state.game);
  return (
    <>
      {state.game.detail ? (
        <Details
          key={state.game.detail.id}
          data={state.game.detail}
          screenHandler={props.screenHandler}
        />
      ) : null}
    </>
  );
};

export default DetailsInfo;
