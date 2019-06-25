import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CREATE_START,
  CREATE_SUCCESS,
  CREATE_ERROR
} from "../actions/authActions";

const initialState = {
  habits: [],
  fetching: false,
  error: null,
  loading: true,
  loggingIn: false,
  creating: false,
  token: localStorage.getItem("token")
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      console.log("Auth reducer state", state);
      console.log("Auth reducer action", action);
      return {
        ...state,
        loggingIn: true,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: null
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    case CREATE_START:
      console.log("Auth reducer state", state);
      console.log("Auth reducer action", action);
      return {
        ...state,
        creating: true,
        error: null
      };
    case CREATE_SUCCESS:
      return {
        ...state,
        creating: false,
        error: null,
        token: localStorage.getItem("token")
      };
    case CREATE_ERROR:
      return {
        ...state,
        creating: false,
        error: action.payload
      };
    default:
      return state;
  }
};
