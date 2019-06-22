import { combineReducers } from "redux";
import authReducer from "./authReducer";
import habitServerReducer from "./habitServerReducer";

export default combineReducers({
  user: authReducer,
  habits: habitServerReducer
});
