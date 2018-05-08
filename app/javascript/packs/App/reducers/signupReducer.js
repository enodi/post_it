import * as types from "../actions/actionTypes";

const signupInitialState = {
  isAuthenticated: false,
  user: {}
};

export default function signupReducer(state = signupInitialState, action = {}) {
  switch (action.type) {
    case types.SIGNUP_SUCCESSFUL:
      return {
        isAuthenticated: true,
        user: action.userInfo
      };
    default:
      return state;
  }
}
