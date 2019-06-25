import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_FAILURE } from "./newsConstants";

const initialState = {
  newsList: [],
  error: null,
  loading: false
};

function newsReducer(state = initialState, action) {
  switch (action.type) {
    case NEWS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        newsList: action.payload
      };

    case NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}

export default newsReducer;
