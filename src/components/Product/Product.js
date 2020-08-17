import React, { useState, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../styled-components/Button";
import fitty from "fitty";
import IconBar from "../IconBar/IconBar";
import { useDispatch, useSelector } from "react-redux";
import { openModal, handleDetail, setGamesDetails } from "../../actions";

const Product = (props) => {
  const AdjustableTextRef = useRef(null);

  const [productData, setProductData] = useState({
    isImg: true,
    emptyHeart: false,
    display: false,
  });

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // Ref creation
  let AdjustableText = React.createRef();

  useLayoutEffect(() => {
    // Resizes text to fit parent container
    fitty(AdjustableTextRef.current, {
      minSize: 15,
      maxSize: 18,
    });
  }, [AdjustableText]);

  // Methods
  const hoverHandler = () => {
    setProductData({ isImg: !productData.isImg });
  };

  const getItem = (id) => {
    const product = state.game.games.results.find((item) => {
      return item.id === id;
    });
    return product;
  };

  const {
    id,
    name,
    metacritic,
    background_image,
    clip,
    genres,
    released,
    rating,
  } = props.games;
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

  const starsCount = Math.round(rating);

  if (clip) {
    var clipUrl = clip.clip;
  }
  return (
    <main className="mainContent">
      <ProductWrapper className="col-9 col-md-6 col-lg-4 my-3">
        <div className="card">
          {/* Div for card image */}
          <>
            <div>
              {/* If the image is being hovered over display video else display image */}
              {productData.isImg ? (
                <div
                  className="gameCover"
                  onClick={() => dispatch(handleDetail(getItem(id)))}
                >
                  <img
                    src={
                      background_image
                        ? background_image
                        : process.env.PUBLIC_URL + "/noImage.png"
                    }
                    alt="product"
                    className="card-img-top"
                    onMouseEnter={() =>
                      clipUrl && hoverHandler() && dispatch(openModal(id))
                    }
                  />
                  {clipUrl ? (
                    <div className="play">
                      <i className="fas fa-circle playCircle" />
                      <i className="fas fa-play playTriangle" />
                    </div>
                  ) : null}
                </div>
              ) : (
                <video
                  src={clipUrl}
                  type="video/mp4"
                  className="video"
                  autoPlay
                  muted
                  loop
                  onClick={() => {
                    dispatch(openModal(id));
                    return dispatch(handleDetail(getItem(id)));
                  }}
                  onMouseLeave={hoverHandler}
                />
              )}
            </div>

            <div className="card-footer d-flex flex-column justify-content-center">
              <div className="mx-auto gameTitle" ref={AdjustableTextRef}>
                <p
                  className={
                    name.length < 28
                      ? "text-center"
                      : name.length < 47
                      ? "text-centerBig"
                      : ""
                  }
                >
                  {name}
                </p>
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
                    {[...Array(starsCount)].map((obj, index) => (
                      <i
                        className="fas fa-star text-gold"
                        key={`${obj}?index=${index}`}
                      />
                    ))}
                  </span>
                </h5>
              </div>
              <div className="detailsButton mx-auto mt-3">
                <Link to="/details" className="ml-auto">
                  <ButtonContainer
                    onClick={() => {
                      props.screenHandler();
                      dispatch(setGamesDetails(id));
                    }}
                  >
                    More Details
                  </ButtonContainer>
                </Link>
              </div>
            </div>
          </>
        </div>
      </ProductWrapper>
      <IconBar />
    </main>
  );
};

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
        box-shadow: 0px 5px 30px dimgray;
        transform: scale(1.025);
      }
      .card-footer {
        background: rgba(247, 247, 247);
      }
    }
  }
`;

export default Product;
