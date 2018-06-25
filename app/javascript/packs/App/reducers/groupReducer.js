import * as types from "../actions/actionTypes";

const groupInitialState = {
  Group: [],
  AllGroups: []
}

export default function groupReducer(state = groupInitialState, action = {}) {
  switch (action.type) {
    case types.GROUP_CREATED_SUCCESSFULLY:
      return {
        ...state,
        ...{ Group: action.groupInfo }
      };
    case types.GROUPS_RETRIEVED_SUCCESSFULLY:
      return {
        ...state,
        ...{ AllGroups: action.groupDetails }
      };
    default:
      return state;
  }
}
