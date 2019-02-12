import axios from "axios";
import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  STORE_ERRORS,
  SET_CURRENT_USER,
  PROFILE_ERROR
} from "./types";
//Dispatch Calls -----------------------------

/*
set loading state before retrieving the profile 
if we find a profile the payload contain the profile data 

if an error is thrown we still call get profile with no object so that we set our loading state to false 
 */

export const getCurrentProfile = () => {
  return async dispatch => {
    try {
      dispatch(setProfileLoading());
      const getProfileResponse = await axios.get("/api/profile");
      dispatch({
        type: GET_PROFILE,
        payload: getProfileResponse.data
      });
    } catch (err) {
      //if the user doesn't have a profile there is no error
      dispatch({
        type: GET_PROFILE,
        payload: {}
      });
    }
  };
};

/*
a request to visit some user's profile overview 
associated Component ProfileOverview
associated path /:handle/profileoverview
*/
export const getProfileByHandle = handle => {
  return async dispatch => {
    try {
      dispatch(setProfileLoading());
      const getProfileHandleResponse = await axios.get(
        "/api/profile/handle/${handle}"
      );
      dispatch({
        type: GET_PROFILE,
        payload: getProfileHandleResponse.data
      });
    } catch (err) {
      dispatch({
        type: GET_PROFILE,
        payload: null
      });
    }
  };
};

export const editProfileBasic = (profileData, history) => {
  return async dispatch => {
    try {
      const editProfileBasicResponse = await axios.post(
        "/api/profile/handle/${handle}/edit-basic",
        profileData
      );
      history.push("/MyProfileOverview");
    } catch (err) {
      dispatch({
        type: STORE_ERRORS,
        payload: err
      });
    }
  };
};

export const editProfileBio = (profileData, history) => {
  return async dispatch => {
    try {
      const editProfileBioResponse = await axios.post(
        "/api/profile/handle/${handle}/edit-bio",
        profileData
      );
      history.push("/MyProfileOverview");
    } catch (err) {
      dispatch({
        type: STORE_ERRORS,
        payload: err
      });
    }
  };
};

export const editProfileSocial = (profileData, history) => {
  return async dispatch => {
    try {
      const editProfileSocialResponse = await axios.post(
        "/api/profile/handle/${handle}/edit-social",
        profileData
      );
      history.push("/MyProfileOverview");
    } catch (err) {
      dispatch({
        type: STORE_ERRORS,
        payload: err
      });
    }
  };
};

export const getProfiles = () => {
  return async dispatch => {
    try {
      dispatch(setProfileLoading());
      const editProfilesResponse = await axios.get("/api/profile/all");
      dispatch({
        type: GET_PROFILES,
        payload: editProfilesResponse.data
      });
    } catch (err) {
      dispatch({
        type: GET_PROFILES,
        payload: null
      });
    }
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
