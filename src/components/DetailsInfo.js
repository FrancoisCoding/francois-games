import React, { Component, useEffect } from "react";
import { ProductConsumer } from "../context";
import Details from "./Details";

export default class DetailsInfo extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          return <Details key={value.details.id} data={value.details} />;
        }}
      </ProductConsumer>
    );
  }
}
