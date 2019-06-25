import API from "Src/config/api";

import { CALL_API } from "Src/middlewares/fetchData";

import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_FAILURE } from "./newsConstants";

// export const newsRequest = () => ({
//   type: NEWS_REQUEST
// });
//
// export const newsSuccess = newsList => ({
//   type: NEWS_SUCCESS,
//   newsList
// });
//
// export const newsFailure = error => ({
//   type: NEWS_FAILURE,
//   error
// });

const getNews = () => ({
  type: CALL_API,
  payload: {
    types: {
      REQUEST: NEWS_REQUEST,
      SUCCESS: NEWS_SUCCESS,
      FAILURE: NEWS_FAILURE
    },
    callAPI: () => API.get("posts?_page=1").then(response => response.data)
  }
});

// return dispatch => {
//   dispatch(newsRequest());
//
//   API.get("posts?_page=1") // test json
//     .then(json => {
//       dispatch(newsSuccess(json.data));
//     })
//     .catch(error => dispatch(newsFailure(error)));
// };

export default getNews;
