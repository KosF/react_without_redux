import { AUTH_SUCCESS, AUTH_FAILURE, LOG_OUT } from "./authConstants";

const initialState = {
  user: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        user: {
          name: action.username
        }
      };

    case AUTH_FAILURE:
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
