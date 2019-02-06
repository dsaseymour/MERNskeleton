import axios from "axios";
import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER,
  PROFILE_ERROR
} from "./types";
//Dispatch Calls -----------------------------
export const getCurrentProfile = () => {
  return async dispatch => {
    try {
      const receivedProfile = await get("/api/profile");
      dispatch({
        type: GET_PROFILE,
        payload: receivedProfile.data
      });
    } catch (err) {
      //if the user doesn't have a profile there is no error
    }
  };
};

export const getProfileByHandle = handle => {
  return async dispatch => {
    try {
    } catch (err) {}
  };
};

export const createProfile = (profileData, history) => {
  return async dispatch => {
    try {
    } catch (err) {}
  };
};

export const getProfiles = () => {
  return async dispatch => {
    try {
    } catch (err) {}
  };
};

export const deleteAccount = () => {
  return async dispatch => {
    try {
    } catch (err) {}
  };
};

//Action Creators -----------------------------
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
