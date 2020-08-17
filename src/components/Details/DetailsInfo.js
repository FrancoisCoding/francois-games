import React from "react";
import Details from "./Details";
import { useSelector } from "react-redux";

const DetailsInfo = (props) => {
  const state = useSelector((state) => state);
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
