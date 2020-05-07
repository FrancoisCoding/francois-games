import React, { Component } from "react";
import { ProductConsumer } from "../context";
import Details from "./Details";

export default class DetailsInfo extends Component {
  static contextType = ProductConsumer;
  render() {
    return (
      <Details
        key={this.context.details.id}
        data={this.context.details}
        screenHandler={this.props.screenHandler}
      />
    );
  }
}
