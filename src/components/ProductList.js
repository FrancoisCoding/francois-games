import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import Footer from "../components/Footer";
import axios from "axios";

export default class ProductList extends Component {
  componentDidMount() {
    const names = [];
    axios
      .get("https://api-endpoint.igdb.com/games/1942?fields=*", {
        headers: {
          "user-key": "a9124d079912c377b7755ac8165e3622",
          Accept: "application/json"
        }
      })
      .then(response => {
        // Do work here
        console.log(response.data);
      })
      .catch(e => {
        console.log("error", e);
      });
  }
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Game" title="Titles" />

            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
      // <Product />
    );
  }
}
