import { combineReducers } from "redux";
import postTeamReducer from "./PostTeam/postTeamReducer";
const rootReducer = combineReducers({
  postTeam: postTeamReducer,
});

export default rootReducer;
