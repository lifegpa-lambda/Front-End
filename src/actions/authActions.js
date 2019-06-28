import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";
export const CREATE_START = "CREATE_START";
export const CREATE_SUCCESS = "CREATE_SUCCESS";
export const CREATE_ERROR = "CREATE_ERROR";
export const ADD_HABIT_START = "ADD_HABIT_START";
export const ADD_HABIT_SUCCESS = "ADD_HABIT_SUCCESS";
export const ADD_HABIT_ERROR = "ADD_HABIT_ERROR";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://lifegpa-zach-christy.herokuapp.com/api/login/", creds)
    .then(response => {
      console.log("login response", response);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.user.id);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
    })
    .catch(error => {
      console.log("login error.response", error.response);
      dispatch({ type: LOGIN_ERROR, payload: error.response });
    });
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const createAccount = creds => dispatch => {
  console.log(creds);
  dispatch({ type: CREATE_START });
  return axios
    .post("https://lifegpa-zach-christy.herokuapp.com/api/register/", creds)
    .then(response => {
      console.log("createAccount response", response);
      localStorage.setItem("token", response.data.payload);
      dispatch({ type: CREATE_SUCCESS, payload: response.data.payload });
    })
    .then(() => {
      const firstHabit = {
        habitTitle: "Example habit",
        categoryId: 1
      };
      dispatch(addNewHabit(firstHabit));
    })
    .catch(error => {
      console.log("createAccount error.response", error.response);
      dispatch({ type: CREATE_ERROR, payload: error.response.data.error });
    });
};

export const addNewHabit = newHabit => dispatch => {
  dispatch({ type: ADD_HABIT_START });
  // console.log(newHabit);
  axios
    .post(`https://lifegpa-zach-christy.herokuapp.com/api/habits`, newHabit, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      // console.log("addHabit response.data", response.data);
      dispatch({ type: ADD_HABIT_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("addHabit error", error.reponse);
      dispatch({
        type: ADD_HABIT_ERROR,
        payload: error.response
      });
    });
};
