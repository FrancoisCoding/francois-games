import React, { Component } from "react";
import { ProductConsumer } from "../context";
import Details from "./Details";

export default class DetailsInfo extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          return value.games.map(game => {
            return <Details key={game.id} games={game} />;
          });
        }}
      </ProductConsumer>
    );
  }
}
