import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import Footer from "../components/Footer";
import ReactPaginate from "react-paginate";
import ShortLoadScreen from "./PreLoad/ShortLoadScreen";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false
    };
    this.props = props;
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  static contextType = ProductConsumer;
  _onButtonClick(e) {
    e.persist();
    if (e.target.tagName === "A") {
      this.setState({
        showComponent: true
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        {this.state.showComponent ? (
          <ShortLoadScreen
            call={() => this.setState({ showComponent: false })}
          />
        ) : null}

        <div>
          <div className="container">
            <Title name="Game" title="Titles" />

            <div className="row">
              {/* Passes game props to Product component and ReactPaginate */}
              {!this.context.games ? (
                <h1 className="hide">Loading...</h1>
              ) : (
                this.context.games.slice(2).map((game, index) => {
                  return (
                    <Product
                      key={`${game.id}?index=${index}?slug=${game.slug}`}
                      games={game}
                      screenHandler={this.props.screenHandler}
                    />
                  );
                })
              )}
              {/* Creates Pages and List to switch between them */}
              <div
                className="pagination"
                onClick={this._onButtonClick}
                key={this.context.count}
              >
                <ReactPaginate
                  previousLabel={"<"}
                  nextLabel={">"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={Math.ceil(this.context.count / 20) - 1 || 1}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={5}
                  onPageChange={this.context.handlePaginate}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
                  initialPage={0}
                  key={this.context.count}
                />
              </div>
              ;
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
      // <Product />
    );
  }
}
