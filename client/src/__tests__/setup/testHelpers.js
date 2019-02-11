import { createStore } from "redux";
import checkPropTypes from "check-prop-types";

import rootReducer from "../../rootreducer";
export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
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
