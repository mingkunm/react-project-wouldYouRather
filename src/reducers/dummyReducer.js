import { DUMMY_ACTION } from "../actions/types";

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case DUMMY_ACTION:
      return [...state, payload];
    default:
      return state;
  }
};
