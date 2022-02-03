/* eslint-disable default-param-last */
import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_IN_FAILURE,
  SIGN_OUT_FAILURE,
} from "./loginTypes";

const initialState = {
  isSignedIn: null,
  userId: null,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: null,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isSignedIn: false,
        userId: null,
        error: action.payload,
      };
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default loginReducer;
