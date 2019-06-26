import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import myLogger from "../middlewares/myLogger";
import fetchData from "../middlewares/fetchData";
import rootReducer from "./rootReducer";

const middleware = [thunk, myLogger, fetchData];

function configureStore() {
  return createStore(
    rootReducer,
    {}, // initialState
    composeWithDevTools(applyMiddleware(...middleware))
  );
}

const store = configureStore();

export default store;
