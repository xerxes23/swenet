import * as types from "./types";
import axios from "axios";

// Get Current User
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile")
    .then(res =>
      dispatch({
        type: types.GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: types.GET_PROFILE,
        payload: {}
      })
    );
};

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post("/api/profile", profileData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Profile Loading
export const setProfileLoading = () => ({
  type: types.PROFILE_LOADING
});

// Clear Profile
export const clearCurrentProfile = () => ({
  type: types.CLEAR_CURRENT_PROFILE
});
