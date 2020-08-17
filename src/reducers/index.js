import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";

const initialGameState = {
  modalOpen: false,
  favorites: [],
  games: [],
  details: [],
  count: null,
  suggestion: false,
  isLoading: false,
  error: "",
};

console.log(initialGameState);

const game_reducer = (state = initialGameState, action) => {
  console.log("ACTION", action);
  switch (action.type) {
    case actionTypes.SET_GAMES_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.SET_GAMES_SUCCESS:
      return {
        ...state,
        games: action.payload,
        isLoading: false,
      };
    case actionTypes.SET_GAMES_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.SET_PAGINATION_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.SET_PAGINATION_SUCCESS:
      return {
        ...state,
        games: action.payload,
        count: action.payload.count,
        isLoading: false,
      };
    case actionTypes.SET_PAGINATION_SUCCESS:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  game: game_reducer,
});

export default rootReducer;
