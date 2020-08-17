import React, { Component } from "react";

const Default = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h1 className="display-3 defaultError">404</h1>
          <h1 className="display-3">error</h1>
          <h2 className="display-3">page not found</h2>
          <h3 className="display-3">
            the requested URL
            <span className="text-danger">
              {this.props.location.pathname}
            </span>{" "}
            was not found
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Default;
