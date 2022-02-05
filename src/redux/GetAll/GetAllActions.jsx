/* eslint-disable import/prefer-default-export */
import {
  GET_PEOPLE,
  GET_PROBLEMS,
  GET_TEAMS,
  GET_LEADERBOARD,
  GET_RANK,
  GET_JUDGEPOINTS,
  LOGGED_ONCE,
} from "./GetAllTypes";

export const getPeople = (people) => ({
  type: GET_PEOPLE,
  payload: people,
});
export const getTeams = (teams) => ({
  type: GET_TEAMS,
  payload: teams,
});
export const getProblems = (problems) => ({
  type: GET_PROBLEMS,
  payload: problems,
});
export const getLeaderboard = (leaderboard) => ({
  type: GET_LEADERBOARD,
  payload: leaderboard,
});
export const getRank = (rank) => ({
  type: GET_RANK,
  payload: rank,
});
export const getJudgePoints = (points) => ({
  type: GET_JUDGEPOINTS,
  payload: points,
});
export const loggedOnce = (bool) => ({
  type: LOGGED_ONCE,
  payload: bool,
});
