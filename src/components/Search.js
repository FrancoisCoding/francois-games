import React, { Component } from "react";
import { ProductConsumer } from "../context";

export default class Search extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductConsumer>
          {value => {
            return (
              <div class="searchContainer">
                <form
                  autocomplete="off"
                  onSubmit={e => {
                    e.preventDefault();
                    value.performSearch(e.target.search.value);
                  }}
                >
                  <input
                    name="search"
                    type="text"
                    placeholder="Search.."
                    label="Search Games"
                    icon="search"
                  />
                  <div class="search" />
                </form>
              </div>
            );
          }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}
