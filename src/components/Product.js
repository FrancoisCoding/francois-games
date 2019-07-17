import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./styled-components/Button";
import fitty from "fitty";

export default class Product extends Component {
  constructor(props) {
    super(props);

    // Ref creation
    this.AdjustableText = React.createRef();
  }
  componentDidMount() {
    const AdjustableText = this.AdjustableText.current;
    // Resizes text to fit parent container
    fitty(AdjustableText, {
      minSize: 27,
      maxSize: 100
    });
  }
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
      genres,
      released,
      rating
    } = this.props.games;
    for (let i = 0; i < genres.length; i++) {
      var genre = genres[i].name;
    }
    // Determines Metacritic score color
    const metacriticColor =
      metacritic < 80 && metacritic > 65
        ? "metacritic-yellow"
        : metacritic < 65
        ? "metacritic-red"
        : "metacritic-green";
    // Genre Icons
    const imgSelect =
      genre === "Shooter" ? (
        <i className="fas fa-crosshairs" />
      ) : genre === "Puzzle" ? (
        <i className="fas fa-puzzle-piece" />
      ) : genre === "RPG" ? (
        <i className="fas fa-theater-masks" />
      ) : genre === "Action" ? (
        <i className="fas fa-bomb" />
      ) : genre === "Adventure" ? (
        <i className="fas fa-compass" />
      ) : genre === "Indie" ? (
        <i className="fas fa-gamepad" />
      ) : genre === "Arcade" ? (
        <i className="fas fa-ghost" />
      ) : genre === "Casual" ? (
        <i className="fas fa-headphones" />
      ) : genre === "Platformer" ? (
        <i className="fas fa-cubes" />
      ) : genre === "Massively Multiplayer" ? (
        <i className="fas fa-users" />
      ) : genre === "Strategy" ? (
        <i className="fas fa-brain" />
      ) : genre === "Simulation" ? (
        <i className="fas fa-laptop" />
      ) : genre === "Racing" ? (
        <i className="fas fa-car" />
      ) : genre === "Sports" ? (
        <i className="fas fa-football-ball" />
      ) : genre === "Fighting" ? (
        <i className="fas fa-user-injured" />
      ) : genre === "Family" ? (
        <i className="fas fa-child" />
      ) : (
        <i className="fas fa-ban" />
      );

    // Used to set how many stars will be shown in rating
    const starsCount = Math.round(rating);

    // An alias to minimize writing clip.clip in code
    if (clip) {
      var clipUrl = clip.clip;
    }
    return (
      <main className="mainContent">
        <ProductWrapper className="col-9 col-md-6 col-lg-4 my-3">
          <div className="card">
            {/* Extracts Values from React Context Provider */}
            <ProductConsumer>
              {value => (
                // Div for card image
                <div
                  className="gameCover"
                  onClick={() => {
                    value.openModal(id);
                    return value.handleDetail(id);
                  }}
                >
                  {/* If the image is being hovered over display video else display image */}
                  {this.state.isImg ? (
                    <React.Fragment>
                      <div className="gameCover">
                        <img
                          src={
                            background_image
                              ? background_image
                              : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                          }
                          alt="product"
                          className="card-img-top"
                          onMouseEnter={() => clipUrl && this.hoverHandler()}
                        />
                        {clipUrl ? (
                          <div className="play">
                            <i className="fas fa-circle playCircle" />
                            <i className="fas fa-play playTriangle" />
                          </div>
                        ) : null}
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
                      onClick={value.getGamesDetails()}
                      onMouseLeave={this.hoverHandler}
                    />
                  )}
                </div>
              )}
            </ProductConsumer>
            {/* Card Footer */}
            <div className="card-footer d-flex flex-column justify-content-center">
              <div className="mx-auto gameTitle" ref={this.AdjustableText}>
                {name}
              </div>
              <div className="gameMetacritic mx-auto">
                <h5 className="mb-0 mt-3">
                  <span className="mr-1 ml-2 font-weight-bold">
                    Metacritic :
                  </span>
                  <span className={metacriticColor}>
                    {metacritic ? metacritic : "N/A"}
                  </span>
                </h5>
              </div>
              <div className="gameGenres mx-auto">
                <h5 className="mb-0 mt-3">
                  <span className="mr-1 ml-2 font-weight-bold">Genre : </span>
                  <span className="text-capitalize text-underline">
                    {imgSelect ? imgSelect : null}
                    {genre ? genre : "N/A"}
                  </span>
                </h5>
              </div>
              <div className="gameReleased mx-auto">
                <h5 className="mb-0 mt-3">
                  <span className="mr-1 ml-2 font-weight-bold">
                    Released :{" "}
                  </span>
                  <span className="text-capitalize text-underline">
                    {released}
                  </span>
                </h5>
              </div>
              <div className="gameRating mx-auto">
                <h5 className="mb-0 mt-3">
                  <span className="mr-1 ml-2 font-weight-bold">Rating : </span>
                  <span>
                    {[...Array(starsCount)].map(obj => (
                      <i className="fas fa-star text-gold" />
                    ))}
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
        <div className="icon-bar" ref={this.StickySocials}>
          <a
            target="_blank"
            // Included this to decrease security risk
            rel="noopener noreferrer"
            href="https://www.facebook.com/francoisdemos/?ref=aymt_homepage_panel&eid=ARDhGhfZyQDmUkRRh9-Hr2tdhdYHajJw0TpdHd95nSg1l0AsvcZaFpnWBptLtseP82jX5u0Fr_2VD1Os"
            className="facebook"
          >
            <i className="fab fa-facebook" />
          </a>
          <a
            target="_blank"
            // Included this to decrease security risk
            rel="noopener noreferrer"
            href="https://twitter.com/FrancoisCoding"
            className="twitter"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            target="_blank"
            // Included this to decrease security risk
            rel="noopener noreferrer"
            href="https://github.com/FrancoisCoding"
            className="github"
          >
            <i className="fab fa-github" />
          </a>
          <a
            target="_blank"
            // Included this to decrease security risk
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/isaiah-francois-56a5b4188/"
            className="linkedin"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a
            target="_blank"
            // Included this to decrease security risk
            rel="noopener noreferrer"
            href="https://www.instagram.com/francoiscoding/"
            className="instagram"
          >
            <i className="fab fa-instagram" />
          </a>
        </div>
      </main>
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
    height: 37rem;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.8s linear;
  }
  @media (min-width: 500px) {
    &:hover {
      .card {
        border: 0.04rem solid rgba(0, 0, 0, 0.2);
        box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2),
          -2px -1px 5px 0px rgba(0, 0, 0, 0.2);
        transform: scale(1.025);
      }
      .card-footer {
        background: rgba(247, 247, 247);
      }
    }
    .img-container:hover .cart-btn {
      transform: translate(0, 0);
    }
    .cart-btn:hover {
      color: var(--mainBlue);
      cursor: pointer;
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
`;
