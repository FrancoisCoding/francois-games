import axios from "axios";
import * as actionTypes from "./types";

const apiUrl = process.env.REACT_APP_API_URL;

/* Game Actions */
export const setGames = () => (dispatch) => {
  dispatch({ type: actionTypes.SET_GAMES_START });
  return axios
    .get(apiUrl)
    .then((res) => {
      console.log("SETGAMES RES", res.data.results);
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
      console.log("PAGINATION RES", res.data.results);
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
