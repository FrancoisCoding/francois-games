import React, { Component } from "react";
import { ProductConsumer } from "../context";
import Details from "./Details";

export default class DetailsInfo extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          console.log("value", value);
          return <Details key={value.games.id} data={value.games} />;
        }}
      </ProductConsumer>
    );
  }
}
