import * as types from "../actions/actionTypes";

const groupInitialState = {
  Group: []
}

export default function groupReducer(state = groupInitialState, action = {}) {
  switch (action.type) {
    case types.GROUP_CREATED_SUCCESSFULLY:
      return {
        Group: action.groupInfo,
      };
    default:
      return state;
  }
}
