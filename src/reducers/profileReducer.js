import _ from "lodash";
import {
  FETCH_PROFILES,
  FETCH_PROFILE_BY_USERNAME,
  FETCH_PROFILE,
  EDIT_PROFILE,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROFILES:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_PROFILE_BY_USERNAME:
      return { ...state, [action.payload.username]: action.payload };
    case FETCH_PROFILE:
    case EDIT_PROFILE:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
