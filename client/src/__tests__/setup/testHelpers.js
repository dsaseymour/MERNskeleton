import { createStore, applyMiddleware } from "redux";
import checkPropTypes from "check-prop-types";
import rootReducer from "../../reducers/index";
import { middleware } from "../../store";
export const storeFactory = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
