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
      genres,
      released,
      rating
    } = this.props.games;
    for (let i = 0; i < genres.length; i++) {
      var genre = genres[i].name;
    }
    const metacriticColor =
      metacritic < 80 && metacritic > 65
        ? "metacritic-yellow"
        : metacritic < 65
        ? "metacritic-red"
        : "metacritic-green";
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
        <i className="fas fa-balance-scale-left" />
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
                          src={
                            background_image
                              ? background_image
                              : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ8NDQ8NDQ0NDQ0NDQ4NDQ8NDQ0NFREWFhURFRUYHSgiGBomGxUVIT0iJSkrLi86Fx82RDcsNygtMi0BCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAADAgQAAQYFB//EAEEQAAMAAQMCAwYCBgMRAAAAAAABAgMEERIFIQYTMRQyQVFhgSJxI0KCkZKhYrGzBxUWJSYzNVJUcnOTwcPR4fD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AI2jSJpAbSElEUhJQEpQko1KElAblCyjUoWUBuZEmTJkWZAyZEmTcyLMgRmSaknMiTIEFJJQIpJqQCUG+AykkoADgZwH4GcAK/Ai4LPAi5ArOSDgtOSDkCrUh1JaqQ6kCrUh1JaqQqkCrUh1JZqQqQFakFSLNIKkBXpB0h6QdIAGiDQtIOkAbMNtGgNomkaROUBKULKIShZQEpQsojKGlASlCyiMoaEBKZFmTUyNKAyZFmTJkWZAyZEmTcyLMgRUk1JOZJqQDUklAqk3xAHgZwH4mcQK7ki5LLgi5AquSFSWnIdSBVqQ6ktVIVSBVqQqktVIVSBUqQqRapA2gK1IKkWKQVICtSCpFikFSACkHSGpBUgCZBoVoNoCcoSSEiSBOULKISNKAnKFlEJQ0oCcIaEQhDwgJwhoRCENCAnEizJqENCA3MiTJkyNMgamSaklMiKQIKSSk8/xLrcml0mTPi4844bc06nvcp7pNfBsp+EevvWxcZeC1GN70oTmaxt9qSbf5P/2B7vAzic94c67m1GfWRn8pY9NT4OZctSryLem29+0r5fE89df6jrslrp2KJw43t5mRLd/Ldt7Lf5bNgde5IuTnOieIs/tPsWvxzjzv3KntNPbdJrd+q9Gnt22OpcgVqkOpLNSHUgVakKpLVSFSAq1INotWgbQFWkDaLNoG0BWtA0izaAtAV6QNIsUgaQAUgqQ9BUgBoNoWiAEpEkhIkgJI0BSNICwhoQUIeAFhDQg4Q0IBYQ0IOEPCASENCIQh4QE5QsojCGhAbmRJkyULKA57x0v8XZvzw/2snJTpcmjwaLquBbrhMamV6Um2t39H2X5qWfQutdLWs096d04V8PxSk2uNKvR/kZoujY8ejnRX+lxrG8dOltzl77+np6gfPugKs09YeLdvJguoXxaqszS/PZnQ/wBzfLjrR3Mtc5zW7Xx/Ek5f5bdvsen4a8LR0+stTlvL5sxP45lcVLp/D194odQ8CxWWs2kz5dJVt8pjdyt3u1OzTS+m+35AeT4qaydY0cYu+Sawc9vVfpOWz/KU39zu+J43h/wnh0VvM6vPnpNeZk2/Dv67L5v5ttnvUgK1SHUlmkFSArVINIs2gbQFa0BaLVoC0BWtAWizaAtAVrQNosWgbQFa0DZYtA2gK9BUPYNADRBiUGwJSLIciyAkjQFI0gLA8AwPADQPCBgeAGhDwgYHgBoQ8IGB4AWENCDgaQB0/UdPky1hjLjvLj3545uXc7NJ7r1XdpfczR9Z0ea/LxajBkyNNqIyxVNL17JnHeGf9N63/d1P9vjOX6VnrTZcWsXu4dTM3+VJ8l955/uA+x63X4NNKrUZceGafFVkuYTrZvZb/HZMbRarDqIWTDkjLjbaV46Vy2ns1uvqfO/7oOreo1OPBje86fTZdTe3pu5dd/2ZX8Z73gXUxg6O81vaMT1N0/6KumwOhXVdL5/s3n4faN9vJ8yfN348tuO+/u9y40fGktSonrL35PXt7fDf3vX/AFd94O58ddac9Mx5MFNLWPHM3L2axVDttP6pbfcD1NR4j6fjt471WBWntS8xPi/k36L7l558fl+arl4+PPmqXDhtvy3+WxyOk8M9L03T8eTW8VWWId5bup43S3Uzs+23/QHw9ix4dFrsGLWYtXCw5MkRjTTxbxSbff47L0+KfzA99+I+n/7Xpv8AnR/5G0nUNPqOXkZcebhty8u5vjv6b7enoz5n0PN0qcVLXxkvLz3hxWRLy+M7L8NL48jt/CS6fWPLk0EVEvIoyc3kbdTO695v4UB7NoG0PYNgV7QFliwLAr2BZYsCwK9gWWLAsCvYNj2BYAUFQ1g0AVBsSg2BKRZCkWQFkaAZGgBoHkCB4AeB4AgeAHgsQV4HgCxA0AQPADwNIMDSBxfhrFa61rG5pJzqdm5al/po9Ged0DpN6jp/UMbilaeLJiVS5buFVbLf57bfc+lwLIHzLoHTsl6HqWryTkdvSVpsXKK5tTi77Lbd9ljX7LNZdRmx9Dw6WMeV5NTqM3KVFcvLnI38vi+C+7Pqck1sBwOTwFqvZnjWuy1KjktNxryXkX4ktue3vfHb6lLpeizdR6Nek43Oo0WVXhnJLjnLTanv9Hc/ZH07c0wPmUeKJWljQ9Q0OXNlxKYmLhbZHK2lua7p/kn8/iD4X0uaH1JZMNYarSN8ODmZ5KqUz+Spdj6fUr5EKA+UeG+srRYax5NHlzOsjtVw22XGVt3X0/mdh4c6zOr81Tp70yx8H+JJK+W/p2/o/wAzoaSCpAFYFjWDYA2V7HsCwAsCx7AsALAsewLACwbGsCwCoCxrBoAqDYlBsCUiSFIkgNI0gyLADwPBXgeGBYgeCtDHhgWYHgrwxoYFmGeF4o69k0tY8eDg8lKrvnLpKF6dk16vf+FntzRwVdVw1r8mozzeTHtePHMJP8O3BPu12a5P9oDq/wC/ObJ0x6vD5fnRHK1UuoTmtsnbff0VNd/kX/DvWPadGs+XjNRzWXj2lOX69327bP7nLeBdVPLPpK3ePInkhV6te7Sf1a4/zPMjWXo8Wu0Tb/HSxy/pvxuvvGwHZ+D+uanWvPkyrHOCGlj4zU1u93tTbe+08fl6nn9L8bZsuunHSxLSZc14sdKaV7PtDdb7Pd8fh+sHd+wdEmfdzapbfJqsu7f3Uf1HNZ9Vp3osOHHOWdTiy3lrI5lQ+Xqk99+20fD9UD6P4063n0Onx5dP5fO80w/Mmqnjwp+ia77yij4g8UarTRoKxLDvqsavLziq7/o/d2pbe+/n8DyvF3UFq+k6TP23vNHNL4ZFjyKl/EmB4vf6PpP/AAV/2QPqM12PB8ZdcrQaXzMfB5ruceJWm539W2k16Sn/ACPXm1sfN/G3VceTqWHHk5Vp9G5eSYSqqttVS2bSfZQvuwOp8GeIMmuxZPP4LPhycaUS5XF+69m3t+sv2Txup+I+pPqObRaSdPXBzwVw+TXlRT3rml60zyfD3WMUdXrJiVxg1lOHORKXN1tSbSb/AF91+2b1eDNl67qIwZvZ8jaayqVeyWDHutgPTw+Juo6fV4tPr8OJLPcRLx7prlXFVvypNbtduxa1HXtQurRol5fkUlv+GvM/zVV677eq+Rz/AFfFn0Gs02o1eWdd3fF0nDhS1u1Ke265br6/Ytal/wCUGN/Rf2FAdtkfY4HSdf6rqXawY8GTg1y/Dx23b297IvkzuslLY+aeHdHqM1ZvZ8/s/Hhz7N893e37tn+8DqOjZ+o1kpazHjx4+G8uOO7vddu1v4bnqWed0fR6nC79o1D1HLjwTTXDbff9+6/cX7YBWBYtsC2AVgWLbBtgDYNi2wbAKgaFsGgDoNk6DYG5EkKRJAaRpYEsWWBYljQyvDGhgWYY0MrQx4YFmGPDKsMaGAuoxvJjuFTh3NSqS3c7rbdfUHoXSo0eNxLduq5Omkm+ySX7kWIY00BQy9CmtbGsnJUVPHlClOb2Tl7v6y9vsH1Twri1Woed5Kjlw8yFKavj29fqtkexNDTQHm9b8Pzrbwu8lTjw7/o1Kc3u1vu/yW33Z6+q0sZsV4aX4ckVD/JrY1NCTQHOf4GS9L7K9RkcrP581wndPg5c7fLvuWus+Fo1caaHmuPZcbxpqZfNNSt38vc/me4qJKgOTnwM00/bdT2af/3c9bonh2NJnz6l5KzZM7bbqVPDenVJbfNtfwo9jka5AeP4j8PRrnivzKw5MLrjcJN99n8fk0med1Hwes+oyalanLivI5b8uUttomez33/VOodEHQHMaTwbhjLOXNmzahw05WRrjunut/Vvv8N9jOs+Fp1OorUedeOqUraZXbZbep0lUFVAc1oPC7wZoze05r8tt8K92t5a79/qU34NSb46nLO/ylL+pnWVQVsDw+k9D9lyvJ52TLvDjjXp3ae/r69v5np2ydsG2BC2BbEtgWwDtg2xLYFsA7YNiWwbYB0wqEphUwDogyVEGBiEkFMSWA0sWWDLElgWJY0MrSxpYFmWNDKssaGBahjQyrLGmgLUULNFWaGmgLU0LNFWaEmgLU0IqKs0IqAsqjaorqiSoB+RnIDkZzAZ0QdBuiLoCdUHVEXRCqA3VA1RlUFVAZTBqjdUFVARtg2yVMGmBG2DTJ2waYEKYNMnTCpgQphUTph0wIUyDNtkQNImmGiaYCyxZYEsSWBYliyyvLFlgWJYssrSxZoC1NCzRWmhZoCzNDTRUmhZoC1NCTRVmhFQFpUTVFZUSVAWlZvmVlZLmA6szkArM5gM7IugnZF2ArohVBuiDoCdUFVGqoKqA3VBVRlUFVAZVA1RuqCqgNVQNMlTCpgRphUyVMOmBGmHTJUw2wItkGzbZoDDaZhgE5YkswwBJYks2YAksSWYYAs0LNGjAFmhJowwBJoRUYYBNUSVmzANqyXM0YBvkZyMMA07IuzDAIuiLo0YBCqIVRhgBVQdUYYAdUFVGGAFTCpmGAHTDpmGAHTINmjAIswwwD//2Q=="
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
                <span className="mr-1 ml-2 font-weight-bold">Released : </span>
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
      transform: scale(1.025);
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
