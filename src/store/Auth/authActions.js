import isAuth from "Src/helpers/checkCredentials";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOG_OUT
} from "./authConstants";

export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginSuccess = (userName, value) => ({
  type: LOGIN_SUCCESS,
  data: {
    userName,
    isAuth: value
  }
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error
});

export const loginOut = () => ({
  type: LOG_OUT
});

export function logIn(data, cb) {
  return dispatch => {
    dispatch(loginRequest());

    if (isAuth(data)) {
      dispatch(loginSuccess(data.username, true));
      cb();
    } else {
      dispatch(loginFailure);
    }
  };
}

export function logOut() {
  return dispatch => {
    dispatch(loginOut());
  };
}
