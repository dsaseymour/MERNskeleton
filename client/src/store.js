import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnly";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const initialState = {};

//exporting middleware so they can be used in testing

export const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
