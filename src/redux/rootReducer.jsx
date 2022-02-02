import { combineReducers } from "redux";
import postTeamReducer from "./PostTeam/postTeamReducer";
import questionsLaunchReducer from "./QuestionsLaunch/questionsLaunchReducer";
import getAllReducer from "./GetAll/GetAllReducers";
const rootReducer = combineReducers({
  postTeam: postTeamReducer,
  questionsLaunch: questionsLaunchReducer,
  getAll: getAllReducer,
});

export default rootReducer;
