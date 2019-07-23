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

        <div className="py-5">
          <div className="container">
            <Title name="Game" title="Titles" />

            <div className="row">
              {/* Passes game props to Product component and ReactPaginate */}
              <ProductConsumer>
                {value => {
                  if (!value.games) {
                    return <h1 className="hide">Loading...</h1>;
                  }
                  return (
                    value.games
                      .slice(2)
                      .map((game, index) => {
                        return (
                          <Product
                            key={`${game.id}?index=${index}?slug=${game.slug}`}
                            games={game}
                            screenHandler={this.props.screenHandler}
                          />
                        );
                      })
                      // Extends passed in props to ReactPaginate
                      .concat(
                        // Creates Pages and List to switch between them
                        <div
                          className="pagination"
                          onClick={this._onButtonClick}
                          key={value.count}
                        >
                          <ReactPaginate
                            previousLabel={"<"}
                            nextLabel={">"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={Math.ceil(value.count / 20) - 1 || 1}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={5}
                            onPageChange={value.handlePaginate}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}
                            initialPage={0}
                            key={value.count}
                          />
                        </div>
                      )
                  );
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
