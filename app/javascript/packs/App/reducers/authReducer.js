import * as types from "../actions/actionTypes";

const authInitialState = {
  isAuthenticated: false,
  user: {}
};

export default function authReducer(state = authInitialState, action = {}) {
  switch (action.type) {
    case types.SIGNUP_SUCCESSFUL:
      return {
        isAuthenticated: true,
        user: action.userInfo
      };
    case types.SIGNIN_SUCCESSFUL:
      return {
        isAuthenticated: true,
        user: action.userInfo
      };
    default:
      return state;
  }
}
