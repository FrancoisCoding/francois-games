import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";

const initialGameState = {
  modalOpen: false,
  modalProduct: {},
  games: [],
  details: {},
  detailProduct: {},
  count: null,
  suggestion: false,
  isLoading: false,
  error: "",
};

const game_reducer = (state = initialGameState, action) => {
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
    case actionTypes.SET_PAGINATION_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.SET_GAME_DETAIL_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.SET_GAME_DETAIL_SUCCESS:
      return {
        ...state,
        detail: action.payload,
        isLoading: false,
      };
    case actionTypes.SET_GAME_DETAIL_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.SET_HANDLE_DETAIL_SUCCESS:
      return {
        ...state,
        detailProduct: action.payload,
      };
    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        modalOpen: true,
        modalProduct: action.payload,
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  game: game_reducer,
});

export default rootReducer;
