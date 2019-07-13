import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import Footer from "../components/Footer";
import ReactPaginate from "react-paginate";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Game" title="Titles" />

            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.games
                    .map(game => {
                      return <Product key={game.id} games={game} />;
                    })
                    .concat(
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
                      />
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
