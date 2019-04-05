import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOG_OUT
} from "./authConstants";

const initialState = {
  user: null,
  error: null,
  loading: false,
  isAuth: false
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        user: action.userName,
        loading: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.userName,
        loading: false,
        isAuth: action.isAuth
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case LOG_OUT:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}

export default authReducer;
