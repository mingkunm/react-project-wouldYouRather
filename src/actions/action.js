import { DUMMY_ACTION } from "./types.js";

export const dummyAction = () => async (dispatch) => {
  await dispatch({
    type: DUMMY_ACTION,
    payload: "Redux is working now!",
  });
};
