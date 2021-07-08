import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: true,
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        loading: false,
      };
    case AUTH_LOGOUT:
    case LOAD_USER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default auth;
