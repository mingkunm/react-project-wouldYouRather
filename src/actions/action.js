import { DUMMY_ACTION } from "./action.js";

export const dummyAction = () => async (dispatch) => {
  await dispatch({
    type: DUMMY_ACTION,
  });
};
