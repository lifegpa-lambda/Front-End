import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const CREATE_START = "CREATE_START";
export const CREATE_SUCCESS = "CREATE_SUCCESS";
export const CREATE_ERROR = "CREATE_ERROR";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("http://localhost:5000/api/login", creds)
    .then(response => {
      console.log("login response", response);
      localStorage.setItem("token", response.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.payload });
    })
    .catch(error => {
      console.log("login error.response", error.response);
      dispatch({ type: LOGIN_ERROR, payload: error.response.data.error });
    });
};

export const createAccount = creds => dispatch => {
  dispatch({ type: CREATE_START });
  return axios
    .post("http://localhost:5000/api/login", creds)
    .then(response => {
      console.log("createAccount response", response);
      localStorage.setItem("token", response.data.payload);
      dispatch({ type: CREATE_SUCCESS, payload: response.data.payload });
    })
    .catch(error => {
      console.log("createAccount error.response", error.response);
      dispatch({ type: CREATE_ERROR, payload: error.response.data.error });
    });
};
