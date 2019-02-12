import jwt_decode from "jwt-decode";
import axios from "axios";
import { SET_CURRENT_USER, AUTH_ERROR, STORE_ERRORS } from "./types";

import setAuthToken from "../utils/setAuthToken";

//Dispatch Calls -----------------------------

/** 
 * 
 * @param {userData}  -
 * @param {history}  -
 * @return {function} Anonymous function
 *
 * and that does the following 
 * 
 * 
 * 
 * @example
 *Register.js component
  onSubmit(){this.props.loginUser(userData,history)}
 *
 */
export const registerUser = (userData, history) => {
  return async dispatch => {
    try {
      const registrationResponse = await axios.post(
        "api/users/register",
        userData
      );
      history.push("/login");
    } catch (err) {
      dispatch({
        type: STORE_ERRORS,
        payload: err
      });
    }
  };
};

/*
in our Login.js component we define a form whose 
onsubmit function sends the userdata entered, to this function 
user data contains the email and password that the user entered on the form
send login data to /login endpoint
server returns token if successful
store token in local storage
set token to be the authorization header for all subsequent requests so that user can access protected routes 
decode the token so that we can read the user data
dispatch an action to update state to store information on which user is currently logged in 
*/
export const loginUser = userData => {
  return async dispatch => {
    try {
      const loginResponse = await axios.post("api/users/login", userData);
      const { token } = loginResponse.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decodedPayload = jwt_decode(token);
      console.log(decodedPayload);
      dispatch(SET_CURRENT_USER(decodedPayload));
    } catch (err) {
      dispatch({
        type: STORE_ERRORS,
        payload: err
      });
    }
  };
};

/*
our google login component sents the google access token
we send this access token to our auth google route which
uses our passport google auth strategy to exchange that access token for user data and return a signed jwt token and user data 
*/
export const authGoogle = data => {
  return async dispatch => {
    try {
      const receivedJWTToken = await axios.post("auth/google", {
        access_token: data
      });
      const { token } = receivedJWTToken.data;
      localStorage.setItem("jwtToken", token);
      const decodedPayload = jwt_decode(token);
      setAuthToken(token);
      dispatch({
        type: SET_CURRENT_USER,
        payload: decodedPayload
      });
    } catch (err) {
      dispatch({
        type: STORE_ERRORS,
        payload: err
      });
    }
  };
};

export const authFacebook = data => {
  return async dispatch => {
    try {
      const receivedJWTToken = await axios.post("auth/facebook", {
        access_token: data
      });
      const { token } = receivedJWTToken.data;
      localStorage.setItem("jwtToken", token);
      const decodedPayload = jwt_decode(token);
      setAuthToken(token);
      dispatch({
        type: SET_CURRENT_USER,
        payload: decodedPayload
      });
    } catch (err) {
      dispatch({
        type: STORE_ERRORS,
        payload: err
      });
    }
  };
};

export const logoutUser = () => {
  return dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(SET_CURRENT_USER({}));
  };
};
//Action Creator -----------------------------
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
