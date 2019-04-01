import isAuth from "Src/helpers/isAuth";
import { AUTH_SUCCESS, AUTH_FAILURE, LOG_OUT } from "./authConstants";

export const authSuccess = user => ({
  type: AUTH_SUCCESS,
  user: {
    name: user.username
  }
});

export const authFailure = () => ({
  type: AUTH_FAILURE,
  error: {
    errorMsg: "Имя пользователя или пароль введены не корректно"
  }
});

export const signOut = () => ({
  type: LOG_OUT
});

export function logIn(data, cb) {
  return dispatch => {
    if (isAuth(data)) {
      dispatch(authSuccess);
      cb();
    } else {
      dispatch(authFailure);
    }
  };
}

export function logOut() {
  return false;
  // return {
  //   type: LOG_OUT
  // };
}
