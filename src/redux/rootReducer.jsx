import { combineReducers } from "redux";
import questionsLaunchReducer from "./QuestionsLaunch/questionsLaunchReducer";
import getAllReducer from "./GetAll/GetAllReducers";
import postJudgeReducer from "./PostJudge/postJudgeReducer";
const rootReducer = combineReducers({
  questionsLaunch: questionsLaunchReducer,
  getAll: getAllReducer,
  postJudge: postJudgeReducer,
});

export default rootReducer;
