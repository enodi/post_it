import jwtDecode from "jwt-decode";
import axios from "axios";
import toastr from "toastr";

import * as types from './actionTypes';

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
        dispatch(signupSuccess(jwtDecode(token)));
        toastr.success(response.data.message);
      })
      .catch((error) => {
        toastr.error(error.response.data.message);
      })
  };
}
