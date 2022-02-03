/* eslint-disable default-param-last */
import { POST_FILE } from "./postJudgeTypes";

const initialState = {
  postjudge: [],
};

const postJudgeReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FILE:
      return {
        ...state,
        postjudge: action.payload,
      };
    default:
      return state;
  }
};
export default postJudgeReducer;
