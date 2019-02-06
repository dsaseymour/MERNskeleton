import jwt_decode from "jwt-decode";
import axios from "axios";
import { AUTH_ERROR } from "./types";

import setAuthToken from "../utils/setAuthToken";

//Dispatch Calls -----------------------------

export const registerUser = (userData, history) => {
  return async dispatch => {
    try {
    } catch (err) {}
  };
};

export const loginUser = userData => {
  return async dispatch => {
    try {
    } catch (err) {}
  };
};

export const logoutUser = () => {
  return async dispatch => {
    try {
    } catch (err) {}
  };
};
//Action Creator -----------------------------
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
