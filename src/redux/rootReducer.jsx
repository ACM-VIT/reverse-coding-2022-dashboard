import { combineReducers } from "redux";
import postTeamReducer from "./PostTeam/postTeamReducer";
import questionsLaunchReducer from "./QuestionsLaunch/questionsLaunchReducer";
import getAllReducer from "./GetAll/GetAllReducers";
import postJudgeReducer from "./PostJudge/postJudgeReducer";
const rootReducer = combineReducers({
  postTeam: postTeamReducer,
  questionsLaunch: questionsLaunchReducer,
  getAll: getAllReducer,
  postJudge: postJudgeReducer,
});

export default rootReducer;
