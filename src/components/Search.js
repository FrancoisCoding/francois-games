import React, { Component } from "react";
import { ProductConsumer } from "../context";
import ShortLoadScreen from "./PreLoad/ShortLoadScreen";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true
    });
  }
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
                    console.log("input entered");
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
