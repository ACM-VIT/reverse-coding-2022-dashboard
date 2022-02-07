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
  SET_TRUE,
  GET_ASSIGNED,
  GET_JUDGEPOINTS,
  SET_REMOVE,
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
  setTrue: false,
  getAssigned: [],
  judgePoints: [],
  setRemove: false,
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
    case GET_ASSIGNED:
      return {
        ...state,
        getAssigned: action.payload,
      };
    case GET_JUDGEPOINTS:
      return {
        ...state,
        judgePoints: action.payload,
      };
    case SET_REMOVE:
      return {
        ...state,
        setRemove: action.payload,
      };
    default:
      return state;
  }
};
export default postJudgeReducer;
