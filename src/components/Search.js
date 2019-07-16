import React, { Component } from "react";
import { ProductConsumer } from "../context";

export default class Search extends Component {
  render() {
    return (
      // Search Buttton Setup
      <React.Fragment>
        <ProductConsumer>
          {value => {
            return (
              <div className="searchContainer">
                <form
                  autoComplete="off"
                  onSubmit={e => {
                    e.preventDefault();
                    // Runs search and grabs inputted value as filter
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
                  <div className="search" />
                </form>
              </div>
            );
          }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}
