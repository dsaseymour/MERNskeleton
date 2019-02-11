import {
  registerUser,
  loginUser,
  authGoogle,
  authFacebook,
  logoutUser,
  setCurrentUser
} from "../../actions/authActions";
import {
  GET_ERRORS,
  CLEAR_ERRORS,
  SET_CURRENT_USER,
  GET_PROFILE,
  PROFILE_LOADING,
  PROFILE_NOT_FOUND,
  CLEAR_CURRENT_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  AUTH_ERROR
} from "../../actions/types";

describe("registerUser", () => {
  test("performs an axios call", () => {});
});

//testing action creators
describe("set Current User", () => {
  test("returns an action with type SET_CURRENT_USER", () => {
    const action = setCurrentUser();
    expect(action).toEqual({ type: SET_CURRENT_USER, payload: {} });
  });
});
