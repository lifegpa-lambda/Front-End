import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rooterReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rooterReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
