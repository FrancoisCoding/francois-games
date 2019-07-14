import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";

export default class Product extends Component {
  // State
  state = {
    isImg: true,
    emptyHeart: false,
    display: false,
    favorites: []
  };

  // Methods
  hoverHandler = () => {
    this.setState({ isImg: !this.state.isImg });
  };
  favoriteHandler = () => {
    this.setState({ display: !this.state.display });
  };
  heartHandler = () => {
    this.setState({ emptyHeart: !this.state.emptyHeart });
  };
  render() {
    // Extracts props from context games state array
    const {
      id,
      name,
      metacritic,
      background_image,
      clip,
      ratings,
      genres
    } = this.props.games;
    console.log(this.props.games);
    for (let i = 0; i < genres.length; i++) {
      var genre = genres[i].name;
    }

    // An alias to minimize writing clip.clip in code
    if (clip) {
      var clipUrl = clip.clip;
    }
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card">
          {/* Extracts Values from React Context Provider */}
          <ProductConsumer>
            {value => (
              // Div for card image
              <div
                className="gameCover"
                onClick={() => {
                  return value.handleDetail(id);
                }}
                onMouseEnter={this.favoriteHandler}
                onMouseLeave={this.favoriteHandler}
              >
                {/* Created link wrapping image so it displays video in fullscreen on click */}
                <a href={clipUrl}>
                  {/* If the image is being hovered over display video else display image */}
                  {this.state.isImg ? (
                    <React.Fragment>
                      <div className="gameCover">
                        <img
                          src={background_image}
                          alt="product"
                          className="card-img-top"
                          onMouseEnter={() => clipUrl && this.hoverHandler()}
                        />
                        {clipUrl ? <i class="fas fa-play-circle play" /> : null}
                      </div>
                    </React.Fragment>
                  ) : (
                    <video
                      src={clipUrl}
                      type="video/mp4"
                      className="video"
                      autoPlay
                      muted
                      loop
                      onMouseLeave={this.hoverHandler}
                    />
                  )}
                </a>
              </div>
            )}
          </ProductConsumer>

          {/* Card Footer */}
          <div className="card-footer d-flex flex-column justify-content-center">
            <div className="mx-auto gameTitle">
              <h1 className="align-self-center mb-0 text-gold text-3d">
                {name}
              </h1>
            </div>
            <div className="gameMetacritic mx-auto">
              <h5 className="mb-0 mt-3">
                <span className="mr-1 ml-2 font-weight-bold">Metacritic :</span>
                <span
                  className={
                    metacritic < 80
                      ? "metacritic-yellow"
                      : metacritic < 65
                      ? "metacritic-red"
                      : "metacritic-green"
                  }
                >
                  {metacritic ? metacritic : "N/A"}
                </span>
              </h5>
            </div>
            <div className="gameGenres mx-auto">
              <h5 className="mb-0 mt-3">
                <span className="mr-1 ml-2 font-weight-bold">Genre : </span>
                <span className="text-capitalize text-underline">
                  {genre ? genre : "N/A"}
                </span>
              </h5>
            </div>
            <div className="detailsButton mx-auto mt-3">
              <Link to="/details" className="ml-auto">
                <ButtonContainer>More Details</ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

// Used styled components to create card dynamically
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    border-radius: 1rem !important;
    transition: all 0.3s ease-in;
    width: 20rem;
    height: 35rem;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.8s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2),
        -2px -1px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.8s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
