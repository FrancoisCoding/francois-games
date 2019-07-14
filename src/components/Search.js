import React, { Component } from "react";
import { ProductConsumer } from "../context";

export default class Search extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductConsumer>
          {value => {
            return (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  value.performSearch(e.target.search.value);
                }}
              >
                <legend>Search Games:</legend>
                <input
                  name="search"
                  type="text"
                  placeholder="Search.."
                  label="Search Games"
                  icon="search"
                />
              </form>
            );
          }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}
