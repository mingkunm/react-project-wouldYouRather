import { DUMMY_ACTION } from "./types.js";
import { showLoading, hideLoading } from "react-redux-loading";

export const dummyAction = () => async (dispatch, getState) => {
  console.log("Get state 1: ", getState());
  dispatch(showLoading());

  setTimeout(() => {
    dispatch({
      type: DUMMY_ACTION,
      payload: "Redux is working now!",
    });

    dispatch(hideLoading());

    console.log("Get state 2: ", getState());
  }, 1000);
};
