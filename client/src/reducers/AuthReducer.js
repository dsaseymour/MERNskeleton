import isEmpty from "is-empty";

import { SET_CURRENT_USER } from "../actions/types";

/*
if payload is empty then we are not authenticated
 */
const initialState = {
  isAuthenticated: false,
  user: {}
};

/*
Set current user,
if the payload is empty then we didn't send a payload containing the user data. 
If the payload is not then that payload contains the user data 
*/

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
