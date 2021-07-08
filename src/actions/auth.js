import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  LOAD_USER_FAIL,
  LOAD_USER_SUCCESS,
} from "./types";
import { showLoading, hideLoading } from "react-redux-loading";

export const userLogin = () => (dispatch) => {
  dispatch(showLoading());

  const user = "John Doe";

  setTimeout(() => {
    localStorage.setItem("user", user);
    dispatch({
      type: AUTH_LOGIN,
      payload: user,
    });

    dispatch(hideLoading());
  }, 1000);
};

export const userLogout = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch({
    type: AUTH_LOGOUT,
  });
};

export const loadUser = () => (dispatch) => {
  dispatch(showLoading());

  setTimeout(() => {
    const user = localStorage.getItem("user");

    if (user) {
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: user,
      });
    } else {
      dispatch({
        type: LOAD_USER_FAIL,
      });
    }

    dispatch(hideLoading());
  }, 1000);
};
