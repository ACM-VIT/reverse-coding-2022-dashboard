import { combineReducers } from "redux";
import postTeamReducer from "./PostTeam/postTeamReducer";
import questionsLaunchReducer from "./QuestionsLaunch/questionsLaunchReducer";
const rootReducer = combineReducers({
  postTeam: postTeamReducer,
  questionsLaunch: questionsLaunchReducer,
});

export default rootReducer;
