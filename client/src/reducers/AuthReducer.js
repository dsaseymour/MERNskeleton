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

in login user, the user has sent userdata to the server endpoint
token has been generated and sent back to client 
token is applied to all future requests and is now stored in localstorage 
token is decoded and that decoded user data is sent to set current user becoming our payload
we update the user object of our state with the user data payload 


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
