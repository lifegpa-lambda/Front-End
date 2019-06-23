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
export const UPDATE_HABIT_START = "UPDATE_HABIT_START";
export const UPDATE_HABIT_SUCCESS = "UPDATE_HABIT_SUCCESS";
export const UPDATE_HABIT_ERROR = "UPDATE_HABIT_ERROR";
export const SET_UPDATE_FORM = "SET_UPDATE_FORM";
export const FILTER_HABITS = "FILTER_HABITS";
export const TOGGLE_CHECKED = "TOGGLE_CHECKED";

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
    .delete(`http://localhost:5000/api/friends/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
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

export const updateHabit = habit => dispatch => {
  dispatch({ type: UPDATE_HABIT_START });
  axios
    .put(`http://localhost:5000/api/friends/${habit.id}`, habit, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      console.log("updateHabit response.data", response.data);
      dispatch({ type: UPDATE_HABIT_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("updateHabit error", error);
      dispatch({
        type: UPDATE_HABIT_ERROR,
        payload: error
      });
    });
};

export const setUpdateForm = habit => {
  return {
    type: SET_UPDATE_FORM,
    payload: habit
  };
};

export const filterHabits = list => {
  return {
    type: FILTER_HABITS,
    payload: list
  };
};

export const toggleChecked = icon => {
  return {
    type: TOGGLE_CHECKED
  };
};
