/* eslint-disable import/prefer-default-export */
import { GET_LAUNCH } from "./questionsLaunchTypes";

export const getLaunch = (launchState) => ({
  type: GET_LAUNCH,
  payload: launchState,
});
