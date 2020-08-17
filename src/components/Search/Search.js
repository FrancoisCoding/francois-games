import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { performSearch } from "../../actions";

const Search = (props) => {
  const dispatch = useDispatch();

  const [searchState, setSearchState] = useState({
    showComponent: false,
    input: "",
  });

  const handleChange = (event) => {
    setSearchState({ input: event.target.value });
  };

  return (
    <React.Fragment>
      <div className="searchContainer">
        <form
          autoComplete="off"
          onChange={(e) => {
            e.preventDefault();
            handleChange(e);
            dispatch(performSearch(e.target.value));
          }}
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(performSearch(e.target.search.value));
          }}
        >
          <input
            name="search"
            type="text"
            placeholder="Search games"
            label="Search Games"
            icon="search"
          />
          <div className="search" />
        </form>
      </div>
    </React.Fragment>
  );
};

export default Search;
