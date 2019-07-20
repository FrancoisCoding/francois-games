import React, { Component } from "react";
import { ProductConsumer } from "../context";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      input: ""
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true
    });
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
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
                  onChange={e => {
                    e.preventDefault();
                    // Runs search and grabs inputted value as filter
                    this.handleChange(e);
                    value.performSearch(e.target.value);
                  }}
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
