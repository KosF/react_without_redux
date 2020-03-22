import { combineReducers } from "redux";

import authReducer from "./Auth/authReducer";
import newsReducer from "./News/newsReducer";

const rootReducer = combineReducers({
  authReducer,
  newsReducer
});

export default rootReducer;
