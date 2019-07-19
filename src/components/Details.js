import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./styled-components/Button";
import Footer from "../components/Footer";

export default class Details extends Component {
  render() {
    if (!this.props.data) {
      return <h1 className="hide">Loading...</h1>;
    }
    if (!this.props.data.developers) {
      return <h1 className="hide">Loading...</h1>;
    }
    if (!this.props.data.publishers) {
      return <h1 className="hide">Loading...</h1>;
    }
    if (!this.props.data.esrb_rating) {
      return <h1 className="hide">Loading...</h1>;
    }
    if (!this.props.data.released) {
      return <h1 className="hide">Loading...</h1>;
    }
    if (!this.props.data.description_raw) {
      return <h1 className="hide">Loading...</h1>;
    }
    return (
      <React.Fragment>
        {/* Extracts Values from React Context Provider */}
        <ProductConsumer>
          {value => (
            <React.Fragment>
              <div className="center">
                <div className="container py-5">
                  <div className="row">
                    <div className=" mx-auto text-center text-slanted text-green detailsTitle">
                      <h1>{this.props.data.name}</h1>
                    </div>
                  </div>
                </div>
                {/* End Title */}
                {/* Product Text */}
                <div className=" text-capitalize">
                  <h2 className="text-green">
                    <strong>
                      developer : {this.props.data.developers[0].name}
                    </strong>
                  </h2>
                  <h2 className="text-green">
                    <strong>
                      publisher : {this.props.data.publishers[0].name}
                    </strong>
                  </h2>
                  <h2 className="text-green">
                    <strong>
                      age rating : {this.props.data.esrb_rating.name}
                    </strong>
                  </h2>
                  <h2 className="text-green">
                    <strong>release date : {this.props.data.released}</strong>
                  </h2>
                  {/* Product Info */}
                  <h3 className="text-capitalize font-weight-bold mt-3 mb-0">
                    description:
                  </h3>
                  <p className="readableText">
                    {this.props.data.description_raw}
                  </p>
                  <img
                    src={this.props.data.background_image_additional}
                    className="img-fluid center"
                    alt="Game"
                  />
                </div>
                <div />
                {/* Buttons */}
                <div>
                  <Link to="/">
                    <ButtonContainer className="mx-auto">
                      back to products
                    </ButtonContainer>
                  </Link>
                </div>
                <div />
              </div>
            </React.Fragment>
          )}
        </ProductConsumer>
        <Footer />
      </React.Fragment>
    );
  }
}
