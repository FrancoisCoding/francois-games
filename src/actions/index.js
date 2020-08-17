import axios from "axios";
import * as actionTypes from "./types";

const apiUrl = process.env.REACT_APP_API_URL;

/* Game Actions */
export const setGames = () => (dispatch) => {
  dispatch({ type: actionTypes.SET_GAMES_START });
  return axios
    .get(apiUrl)
    .then((res) => {
      dispatch({
        type: actionTypes.SET_GAMES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_GAMES_FAIL,
        payload: err.message,
      });
    });
};

export const setGamesDetails = (game) => (dispatch) => {
  dispatch({ type: actionTypes.SET_GAME_DETAIL_START });
  console.log("SETGAMEDETAILS GAME", game);
  return axios
    .get(`${apiUrl}/${game}`, {
      headers: {
        Accept: "application/json",
      },
    })
    .then((res) => {
      console.log("SETGAMES DETAILS RES", res.data);
      dispatch({
        type: actionTypes.SET_GAME_DETAIL_SUCCESS,
        payload: res.data,
      });
      window.scrollTo(0, 0);
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_GAME_DETAIL_FAIL,
        payload: err.message,
      });
    });
};

export const handleDetail = (product) => (dispatch) => {
  dispatch({ type: actionTypes.SET_HANDLE_DETAIL_SUCCESS, payload: product });
};

/* Pagination Actions */
export const handlePaginate = (data = { selected: 1 }) => (dispatch) => {
  dispatch({ type: actionTypes.SET_PAGINATION_START });
  return axios
    .get(
      `${apiUrl}${apiUrl.includes("?") ? "&" : "?"}page=${data.selected + 1}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
    .then((res) => {
      dispatch({
        type: actionTypes.SET_PAGINATION_SUCCESS,
        payload: res.data,
      });
      window.scrollTo(0, 0);
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_PAGINATION_FAIL,
        payload: err.message,
      });
    });
};

/* Modal Actions */
export const openModal = (product) => (dispatch) => {
  dispatch({ type: actionTypes.OPEN_MODAL, payload: product });
};

export const closeModal = () => (dispatch) => {
  dispatch({ type: actionTypes.CLOSE_MODAL });
};

/* Search Actions */
export const performSearch = (searchTerm) => (dispatch) => {
  if (searchTerm === "") {
    dispatch({ type: actionTypes.SET_GAMES_START });
    return axios
      .get(apiUrl)
      .then((res) => {
        dispatch({
          type: actionTypes.SET_GAMES_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.SET_GAMES_FAIL,
          payload: err.message,
        });
      });
  }

  const searchUrl = `${apiUrl}?search=${searchTerm}`;
  dispatch({ type: actionTypes.SET_GAMES_START });
  return axios
    .get(searchUrl)
    .then((res) => {
      dispatch({
        type: actionTypes.SET_GAMES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_GAMES_FAIL,
        payload: err.message,
      });
    });
};

// performSearch = search => {
//   this.setState({ apiUrl: `https://api.rawg.io/api/games?search=${search}` });
// };
