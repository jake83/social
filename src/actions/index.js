import profiles from "../apis/profiles";
import history from "../history";
import { SIGN_IN, SIGN_OUT, FETCH_PROFILE, EDIT_PROFILE } from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const fetchProfile = (id) => async (dispatch) => {
  const response = await profiles.get(`/profiles/${id}`);

  dispatch({ type: FETCH_PROFILE, payload: response.data });
};

export const editProfile = (id, formValues) => async (dispatch) => {
  const response = await profiles.patch(`/profiles/${id}`, formValues);

  dispatch({ type: EDIT_PROFILE, payload: response.data });
};
