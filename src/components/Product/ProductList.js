import React, { useState, useEffect } from "react";
import Product from "./Product";
import Title from "../Title/Title";
import Footer from "../Footer/Footer";
import ReactPaginate from "react-paginate";
import ShortLoadScreen from "../PreLoad/ShortLoadScreen";
import { useDispatch, useSelector } from "react-redux";
import { handlePaginate, setGames } from "../../actions";

const ProductList = ({ screenHandler }) => {
  const [showComponent, setShowComponent] = useState(false);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const _onButtonClick = (e) => {
    e.persist();
    if (e.target.tagName === "A") {
      setShowComponent(true);
    }
  };

  const handlePagination = (e) => {
    dispatch(handlePaginate(e));
  };

  useEffect(() => {
    dispatch(setGames());
  }, [dispatch]);

  const gameResults = state.game.games.results;
  const games = state.game.games;

  return (
    <React.Fragment>
      {showComponent ? (
        <ShortLoadScreen call={() => setShowComponent(false)} />
      ) : null}

      <div>
        <div className="container">
          <Title name="Game" title="Titles" />

          <div className="row">
            {!gameResults ? <h1 className="hide">Loading...</h1> : null}
            {gameResults
              ? gameResults.map((game, index) => {
                  return (
                    <Product
                      key={`${game.id}?index=${index}?slug=${game.slug}`}
                      games={game}
                      screenHandler={screenHandler}
                    />
                  );
                })
              : null}
          </div>

          {gameResults ? (
            <div
              className="pagination"
              onClick={_onButtonClick}
              key={games.count}
            >
              <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={Math.ceil(games.count / 20) - 1 || 1}
                marginPagesDisplayed={1}
                pageRangeDisplayed={5}
                disableInitialCallback={true}
                onPageChange={(e) => handlePagination(e)}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
                initialPage={0}
                key={games.count}
              />
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ProductList;
