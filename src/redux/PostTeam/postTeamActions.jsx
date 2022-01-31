/* eslint-disable import/prefer-default-export */
import { GET_PEOPLE } from "./postTeamTypes";

export const getPeople = (people) => ({
  type: GET_PEOPLE,
  payload: people,
});
