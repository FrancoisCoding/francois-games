import React from "react";

export default function Title({ name, title }) {
  return (
    // Game Titles Heading
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1 className="text-capitalize font-weight-bold font-big gameTitlesHeader">
          {name}{" "}
          <strong className="text-green titleTitlesHeader">{title}</strong>
        </h1>
      </div>
    </div>
  );
}
