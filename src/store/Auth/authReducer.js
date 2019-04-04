import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOG_OUT
} from "./authConstants";

const initialState = {
  user: null,
  error: null,
  isAuth: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        user: action.username
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.username,
        isAuth: action.isAuth
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case LOG_OUT:
      return {
        ...state
      };

    default:
      return state;
  }
};
