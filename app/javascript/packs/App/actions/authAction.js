import jwtDecode from "jwt-decode";
import axios from "axios";
import toastr from "toastr";

import history from "../history";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import * as types from "./actionTypes";

export function signupSuccess(userInfo) {
  return {
    type: types.SIGNUP_SUCCESSFUL,
    userInfo
  };
}

export function signupAction(userDetails) {
  return (dispatch) => {
    return axios.post("/api/v1/user/signup", userDetails)
      .then((response) => {
        const token = response.data.auth_token;
        localStorage.setItem('token', token);
        setAuthorizationToken(token);
        dispatch(signupSuccess(jwtDecode(token)));
        toastr.success(response.data.message);
        history.push("/dashboard");
      })
      .catch((error) => {
        toastr.error(error.response.data.message);
      })
  };
}

export function signinSuccess(userInfo) {
  return {
    type: types.SIGNIN_SUCCESSFUL,
    userInfo
  };
}

export function signinAction(userDetails) {
  return (dispatch) => {
    return axios.post("/api/v1/user/signin", userDetails)
      .then((response) => {
        const token = response.data.auth_token;
        localStorage.setItem('token', token);
        setAuthorizationToken(token);
        dispatch(signinSuccess(jwtDecode(token)));
        toastr.success(response.data.message);
        history.push("/dashboard");
      })
      .catch((error) => {
        toastr.error(error.response.data.message);
      })
  };
}

export function signoutSuccess() {
  return {
    type: types.SIGNOUT_SUCCESSFUL
  };
}

export function signoutAction() {
  return (dispatch) => {
    localStorage.clear();
    dispatch(signoutSuccess());
    history.push("/signin");
  }
}
