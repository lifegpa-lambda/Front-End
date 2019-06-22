import axios from "axios";

export const FETCH_HABITS_START = "FETCH_HABITS_START";
export const FETCH_HABITS_SUCCESS = "FETCH_HABITS_SUCCESS";
export const FETCH_HABITS_ERROR = "FETCH_HABITS_ERROR";
export const ADD_HABIT_START = "ADD_HABIT_START";
export const ADD_HABIT_SUCCESS = "ADD_HABIT_SUCCESS";
export const ADD_HABIT_ERROR = "ADD_HABIT_ERROR";
export const DELETE_HABIT_START = "DELETE_HABIT_START";
export const DELETE_HABIT_SUCCESS = "DELETE_HABIT_SUCCESS";
export const DELETE_HABIT_ERROR = "DELETE_HABIT_ERROR";

export const getHabits = () => dispatch => {
  dispatch({ type: FETCH_HABITS_START });
  axios
    .get("http://localhost:5000/api/friends", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      console.log("getHabits response.data", response.data);
      dispatch({ type: FETCH_HABITS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("getHabits error", error);
      dispatch({
        type: FETCH_HABITS_ERROR,
        payload: error.response.data.error
      });
    });
};

export const addHabit = newHabit => dispatch => {
  dispatch({ type: ADD_HABIT_START });
  axios
    .post("http://localhost:5000/api/friends", newHabit, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      console.log("addHabit response.data", response.data);
      dispatch({ type: ADD_HABIT_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("addHabit error", error);
      dispatch({
        type: ADD_HABIT_ERROR,
        payload: error.response.data.error
      });
    });
};

export const deleteHabit = id => dispatch => {
  dispatch({ type: DELETE_HABIT_START });
  axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(response => {
      console.log("deleteHabit response.data", response.data);
      dispatch({ type: DELETE_HABIT_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("deleteHabit error", error);
      dispatch({
        type: DELETE_HABIT_ERROR,
        payload: error
      });
    });
};
