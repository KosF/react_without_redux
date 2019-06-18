import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import myLogger from "../middlewares/myLogger";
import rootReducer from "./rootReducer";

const middleware = [thunk, myLogger];

function configureStore() {
  return createStore(
    rootReducer,
    {}, // initialState
    composeWithDevTools(applyMiddleware(...middleware))
  );
}

const store = configureStore();

export default store;
