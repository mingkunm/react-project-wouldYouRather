import { combineReducers } from "redux";

import dummyReducer from "./dummyReducer";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  dummyReducer,
  loadingBar: loadingBarReducer,
});
