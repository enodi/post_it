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
        dispatch(groupSuccess(
          {
            name: response.data.details.name,
            id: response.data.details.id
          }
        ));
        toastr.success(response.data.message);
      })
      .catch((error) => {
        toastr.error(error.response.data.message);
      })
  }
}

export function retrieveGroupsSuccess(groupDetails) {
  return {
    type: types.GROUPS_RETRIEVED_SUCCESSFULLY,
    groupDetails
  };
}

export function retrieveGroups() {
  return (dispatch) => {
    return axios.get("/api/v1/groups")
      .then((response) => {
        dispatch(retrieveGroupsSuccess(response.data.groups));
      })
      .catch((error) => {
        toastr.error(error.response.data.message);
      })
  }
}
