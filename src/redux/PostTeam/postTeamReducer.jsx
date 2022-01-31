/* eslint-disable default-param-last */
import { GET_PEOPLE } from "./postTeamTypes";

const initialState = {
  people: [],
};

const postTeamReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE:
      return {
        ...state,
        people: action.payload,
      };
    default:
      return state;
  }
};
export default postTeamReducer;
