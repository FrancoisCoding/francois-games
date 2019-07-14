import React, { Component } from "react";
import { ProductConsumer } from "../context";

export default class Search extends Component {
  render() {
    return (
      <React.Fragment>
        <input type="text" placeholder="Search.." />
      </React.Fragment>
    );
  }
}
