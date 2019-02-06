import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import { combineReducers } from "redux";

//combine reducers
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer
});
