import API from "Src/config/api";
import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_FAILURE } from "./newsConstants";

export const loginRequest = () => ({
  type: NEWS_REQUEST
});

export const loginSuccess = newsList => ({
  type: NEWS_SUCCESS,
  newsList
});

export const loginFailure = error => ({
  type: NEWS_FAILURE,
  error
});

export function getNews() {
  return dispatch => {
    dispatch(loginRequest());

    API.get("posts?_page=1") // test json
      .then(json => {
        dispatch(loginSuccess(json.data));
      })
      .catch(error => dispatch(loginFailure(error)));
  };
}
