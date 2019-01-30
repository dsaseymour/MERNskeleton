import jwt_decode from "jwt-decode";
import axios from "axios";

import setAuthToken from "../utils/setAuthToken";

export const registerUser = (userData, history) => {};

export const loginUser = userData => dispatch => {};

export const logoutUser = () => dispatch => {};

export const setCurrentUser = decoded => {
  return {
    type: SETCURRENTUSER,
    payload: decoded
  };
};
