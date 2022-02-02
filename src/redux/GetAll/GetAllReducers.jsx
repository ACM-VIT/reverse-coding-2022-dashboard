/* eslint-disable default-param-last */
import { GET_PEOPLE, GET_PROBLEMS, GET_TEAMS } from "./GetAllTypes";

const initialState = {
  people: {},
  problems: [],
  teams: {},
};

const getAllReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE:
      return {
        ...state,
        people: action.payload,
      };
    case GET_PROBLEMS:
      return {
        ...state,
        problems: action.payload,
      };
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    default:
      return state;
  }
};
export default getAllReducer;
