/* eslint-disable default-param-last */
import {
  POST_FILE,
  CASE_ONE,
  CASE_TWO,
  CASE_THREE,
  CASE_FOUR,
  CASE_FIVE,
  JUDGE_MAIN,
} from "./postJudgeTypes";
import { CODE_STATES } from "./states";
const initialState = {
  postjudge: [],
  judgestatecol: "",
  judgestatetext: "",
  judgeMain: [],
};

const postJudgeReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FILE:
      return {
        ...state,
        postjudge: action.payload,
      };
    case CASE_ONE:
      return {
        ...state,
        judgestatecol: CODE_STATES[action.payload].color,
        judgestatetext: CODE_STATES[action.payload].text,
      };
    case CASE_TWO:
      return {
        ...state,
        judgestatecol: CODE_STATES[action.payload].color,
        judgestatetext: CODE_STATES[action.payload].text,
      };
    case CASE_THREE:
      return {
        ...state,
        judgestatecol: CODE_STATES[action.payload].color,
        judgestatetext: CODE_STATES[action.payload].text,
      };
    case CASE_FOUR:
      return {
        ...state,
        judgestatecol: CODE_STATES[action.payload].color,
        judgestatetext: CODE_STATES[action.payload].text,
      };
    case CASE_FIVE:
      return {
        ...state,
        judgestatecol: CODE_STATES[action.payload].color,
        judgestatetext: CODE_STATES[action.payload].text,
      };
    case JUDGE_MAIN:
      return {
        ...state,
        judgeMain: action.payload,
      };
    default:
      return state;
  }
};
export default postJudgeReducer;
