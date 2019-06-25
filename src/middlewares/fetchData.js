export const CALL_API = "CALL_API";

const fetchData = store => next => action => {
  if (action.type !== CALL_API) {
    return next(action);
  }

  const { types, callAPI } = action.payload;
  const { REQUEST, SUCCESS, FAILURE } = types;

  store.dispatch({ type: REQUEST });

  return callAPI()
    .then(response => {
      store.dispatch({
        type: SUCCESS,
        payload: response
      });

      // return Promise.resolve(store.getState()); // ?
    })
    .catch(error => {
      store.dispatch({
        type: FAILURE,
        payload: error
      });

      // return Promise.reject(error); // ?
    });
};

export default fetchData;
