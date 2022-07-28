import _ from "lodash";
import { FETCH_PROFILE, EDIT_PROFILE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
    case EDIT_PROFILE:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
