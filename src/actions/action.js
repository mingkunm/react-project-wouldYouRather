import { DUMMY_ACTION } from "./types.js";
import { showLoading, hideLoading } from "react-redux-loading";

export const dummyAction = () => async (dispatch) => {
  dispatch(showLoading());

  setTimeout(() => {
    dispatch({
      type: DUMMY_ACTION,
      payload: "Redux is working now!",
    });

    dispatch(hideLoading());
  }, 1000);
};
