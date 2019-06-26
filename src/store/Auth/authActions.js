import isAuth from "Src/helpers/checkCredentials";
import { setCookie } from "Src/helpers/cookie";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOG_OUT
} from "./authConstants";

export const loginRequest = userName => ({
  type: LOGIN_REQUEST,
  userName
});

export const loginSuccess = (userName, value) => ({
  type: LOGIN_SUCCESS,
  userName,
  isAuth: value
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error
});

export const logIn = (data, callback) => dispatch => {
  dispatch(loginRequest(data.username));

  if (isAuth(data)) {
    dispatch(loginSuccess(data.username, true));
    callback();
  } else {
    dispatch(loginFailure);
  }
};

export const logOut = callback => dispatch => {
  dispatch({ type: LOG_OUT });

  setCookie("isAuth", false);
  callback();
};
