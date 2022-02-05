/* eslint-disable default-param-last */
import {
  POST_FILE,
  // CASE_ONE,
  // CASE_TWO,
  // CASE_THREE,
  // CASE_FOUR,
  // CASE_FIVE,
  JUDGE_MAIN,
  CLEAR_ALL,
  SET_DISABLE,
  TASK_RUNNER,
  SET_LOADING,
} from "./postJudgeTypes";
import { CODE_STATES } from "./states";
const initialState = {
  postjudge: [],
  // judgestatecol: "",
  // judgestatetext: "",
  judgeMain: [],
  disable: false,
  taskRunner: [],
  loading: false,
};

const postJudgeReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FILE:
      return {
        ...state,
        postjudge: action.payload,
      };
    // case CASE_ONE:
    //   return {
    //     ...state,
    //     judgestatecol: CODE_STATES[action.payload].color,
    //     judgestatetext: CODE_STATES[action.payload].text,
    //   };
    // case CASE_TWO:
    //   return {
    //     ...state,
    //     judgestatecol: CODE_STATES[action.payload].color,
    //     judgestatetext: CODE_STATES[action.payload].text,
    //   };
    // case CASE_THREE:
    //   return {
    //     ...state,
    //     judgestatecol: CODE_STATES[action.payload].color,
    //     judgestatetext: CODE_STATES[action.payload].text,
    //   };
    // case CASE_FOUR:
    //   return {
    //     ...state,
    //     judgestatecol: CODE_STATES[action.payload].color,
    //     judgestatetext: CODE_STATES[action.payload].text,
    //   };
    // case CASE_FIVE:
    //   return {
    //     ...state,
    //     judgestatecol: CODE_STATES[action.payload].color,
    //     judgestatetext: CODE_STATES[action.payload].text,
    //   };
    case JUDGE_MAIN:
      return {
        ...state,
        judgeMain: action.payload,
      };
    case CLEAR_ALL:
      return {
        ...state,
        judgeMain: [],
        taskRunner: [],
      };
    case SET_DISABLE:
      return {
        ...state,
        disable: action.payload,
      };
    case TASK_RUNNER:
      return {
        ...state,
        taskRunner: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
export default postJudgeReducer;
