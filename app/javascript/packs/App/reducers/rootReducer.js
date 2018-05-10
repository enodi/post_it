import { combineReducers } from "redux";

import authReducer from "./authReducer";
import * as type from "../actions/actionTypes";

const appReducer = combineReducers({
  authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "SIGN_OUT_SUCCESSFUL") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
