import { DUMMY_ACTION } from "../actions/types";

const dummyReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case DUMMY_ACTION:
      return [...state, payload];
    default:
      return state;
  }
};

export default dummyReducer;
