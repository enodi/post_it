import { combineReducers } from "redux";

import authReducer from "./authReducer";
import groupReducer from "./groupReducer";
import * as type from "../actions/actionTypes";

const appReducer = combineReducers({
  authReducer,
  groupReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
