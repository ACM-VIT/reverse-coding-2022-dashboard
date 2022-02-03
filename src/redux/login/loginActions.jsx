/* eslint-disable import/prefer-default-export */

import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_IN_FAILURE,
  SIGN_OUT_FAILURE,
} from "./loginTypes";
// import url from "../../url";

export const signIn = (userId) => ({
  type: SIGN_IN,
  payload: userId,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const signInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  payload: error,
});

export const signOutFailure = (error) => ({
  type: SIGN_OUT_FAILURE,
  payload: error,
});

export const gauthSignIn = () => (dispatch) => {
  // dispatch signIn
  // gauth
  window.open(`https://firebase.acmvit.in/auth/google`, "_self");

  // dispatch(signIn(1));
  // catch error
  // dispatch(signInFailure("error"));
};
export const gauthSignOut = () => (dispatch) => {
  // remove token
  // dispatch signOut

  dispatch(signOut);
  // catch error
  // dispatch(signOutFailure("error"));
};
