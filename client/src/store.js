import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnly";
import thunk from "redux-thunk";
import rootReducer from "./rootreducer";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
