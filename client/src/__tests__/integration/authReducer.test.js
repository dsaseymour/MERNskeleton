import authReducer from "../../reducers/authReducer";
import { SET_CURRENT_USER } from "../../actions/types";

describe("default initial state test", () => {
  test("returns default inital state when no action is passed  ", () => {
    const returnedState = authReducer(undefined, {});
    expect(returnedState).toEqual({ isAuthenticated: false, user: {} });
  });
});

describe("sending a setcurrent User action with user payload", () => {
  test("returns with state of isAuthenticated upon receiving an action with a nonempty payload  ", () => {
    const createdAction = {
      type: SET_CURRENT_USER,
      payload: "this is a user payload"
    };
    const returnedState = authReducer(undefined, createdAction);
    expect(returnedState.isAuthenticated).toBeTruthy();
    expect(returnedState.isAuthenticated).toEqual(createdAction.payload);
  });
});
