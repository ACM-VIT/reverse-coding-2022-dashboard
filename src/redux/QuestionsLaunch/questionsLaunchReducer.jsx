/* eslint-disable default-param-last */
import { GET_LAUNCH } from "./questionsLaunchTypes";

const initialState = {
  launchState: false,
};

const questionsLaunchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LAUNCH:
      return {
        ...state,
        launchState: action.payload,
      };
    default:
      return state;
  }
};
export default questionsLaunchReducer;
