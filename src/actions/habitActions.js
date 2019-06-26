import axios from "axios";
import store from "../store";
import { unpackHabit } from "../utilities";

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
export const UPDATE_GPAS_START = "UPDATE_GPAS_START";
export const UPDATE_GPAS_SUCCESS = "UPDATE_GPAS_SUCCESS";
export const SET_UPDATE_FORM = "SET_UPDATE_FORM";
export const FILTER_HABITS = "FILTER_HABITS";
export const TOGGLE_CHECKED = "TOGGLE_CHECKED";

export const getHabits = () => dispatch => {
  dispatch({ type: FETCH_HABITS_START });
  axios
    .get(
      `https://lifegpa-zach-christy.herokuapp.com/api/users/habits/${localStorage.getItem(
        "userId"
      )}`,
      {
        headers: { Authorization: localStorage.getItem("token") }
      }
    )
    .then(response => {
      console.log("getHabits response.data", response.data);
      dispatch({ type: FETCH_HABITS_SUCCESS, payload: response.data.habits });
    })
    .catch(error => {
      console.log("getHabits error", error);
      dispatch({
        type: FETCH_HABITS_ERROR,
        payload: error.response
      });
    });
};

export const addHabit = newHabit => dispatch => {
  dispatch({ type: ADD_HABIT_START });
  console.log(newHabit);
  axios
    .post(`https://lifegpa-zach-christy.herokuapp.com/api/habits`, newHabit, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      console.log("addHabit response.data", response.data);
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

export const deleteHabit = id => dispatch => {
  dispatch({ type: DELETE_HABIT_START });
  axios
    .delete(`https://lifegpa-zach-christy.herokuapp.com/api/habits/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      console.log("deleteHabit response.data", response.data);
      dispatch({ type: DELETE_HABIT_SUCCESS });
    })
    .then(() => {
      dispatch(getHabits());
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
  console.log("updateHabit habit", habit);
  axios
    .put(
      `https://lifegpa-zach-christy.herokuapp.com/api/habits/${habit.id}`,
      {
        habitTitle: habit.habitTitle,
        categoryId: habit.categoryId,
        history: habit.history,
        completed: habit.completed
      },
      {
        headers: { Authorization: localStorage.getItem("token") }
      }
    )
    .then(response => {
      console.log("updateHabit response.data", response.data);
      dispatch({ type: UPDATE_HABIT_SUCCESS });
    })
    .catch(error => {
      console.log("updateHabit error", error);
      dispatch({
        type: UPDATE_HABIT_ERROR,
        payload: error
      });
    });
};

const updateGPAs = dispatch => {
  dispatch({ type: UPDATE_GPAS_START });
  const gpaScores = store.getState().habits.gpaScores;
  store.getState().habits.habits.map(habit => {
    const { processedHabit, GPA } = unpackHabit(habit);
    gpaScores[habit.id] = GPA;
    if (habit.history !== processedHabit.history) {
      dispatch(updateHabit(processedHabit));
    }
    return null;
  });
  dispatch({ type: UPDATE_GPAS_SUCCESS, payload: gpaScores });
  // console.log(gpaScores);
};

const updateGPA = habit => dispatch => {
  dispatch({ type: UPDATE_GPAS_START });
  const gpaScores = store.getState().habits.gpaScores;
  gpaScores[habit.id] = unpackHabit(habit).GPA;
  dispatch({ type: UPDATE_GPAS_SUCCESS, payload: gpaScores });
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

export const toggleChecked = habit => {
  return {
    type: TOGGLE_CHECKED,
    payload: habit
  };
};
