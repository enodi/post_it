import jwtDecode from "jwt-decode";
import axios from "axios";
import toastr from "toastr";

import * as types from "./actionTypes";

export function groupSuccess(groupInfo) {
  return {
    type: types.GROUP_CREATED_SUCCESSFULLY,
    groupInfo
  };
}

export function groupAction(groupDetails) {
  return (dispatch) => {
    return axios.post("/api/v1/group", groupDetails)
      .then((response) => {
        dispatch(groupSuccess({ name: response.data.details.name, id: response.data.details.id }));
        toastr.success(response.data.message);
      })
      .catch((error) => {
        toastr.error(error.response.data.message);
      })
  }
}
