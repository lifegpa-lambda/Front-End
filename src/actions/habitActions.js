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
export const UPDATE_LIFEGPA_START = "UPDATE_LIFEGPA_START";
export const UPDATE_LIFEGPA_SUCCESS = "UPDATE_LIFEGPA_SUCCESS";
export const SET_UPDATE_FORM = "SET_UPDATE_FORM";
export const FILTER_HABITS = "FILTER_HABITS";
export const TOGGLE_CHECKED = "TOGGLE_CHECKED";

export const getHabits = () => dispatch => {
  dispatch({ type: FETCH_HABITS_START });
  const axiosPromise = axios
    .get(
      `https://lifegpa-zach-christy.herokuapp.com/api/users/habits/${localStorage.getItem(
        "userId"
      )}`,
      {
        headers: { Authorization: localStorage.getItem("token") }
      }
    )
    .then(response => {
      // console.log("getHabits response.data", response.data);
      dispatch({ type: FETCH_HABITS_SUCCESS, payload: response.data.habits });
    })
    .then(() => dispatch(updateGPAs))
    .catch(error => {
      console.log("getHabits error", error);
      dispatch({
        type: FETCH_HABITS_ERROR,
        payload: error.response
      });
    });
  return axiosPromise;
};

export const addHabit = newHabit => dispatch => {
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

export const deleteHabit = id => dispatch => {
  dispatch({ type: DELETE_HABIT_START });
  axios
    .delete(`https://lifegpa-zach-christy.herokuapp.com/api/habits/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      // console.log("deleteHabit response.data", response.data);
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
  // console.log("updateHabit habit", habit);
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
      // console.log("updateHabit response.data", response.data);
      dispatch({ type: UPDATE_HABIT_SUCCESS, payload: habit });
    })
    .then(() => {
      dispatch(getHabits());
    })
    .catch(error => {
      console.log("updateHabit error", error);
      dispatch({
        type: UPDATE_HABIT_ERROR,
        payload: error
      });
    });
};

export const updateGPAs = dispatch => {
  dispatch({ type: UPDATE_GPAS_START });
  const habits = store.getState().habits.habits;
  const updatedHabits = habits.map(habit => {
    const { processedHabit, GPA } = unpackHabit(habit);
    habit.gpa = GPA;
    if (habit.history !== processedHabit.history) {
      dispatch(updateHabit(processedHabit));
    }
    return habit;
  });
  dispatch({ type: UPDATE_GPAS_SUCCESS, payload: updatedHabits });
  dispatch(updateLifeGPA);
};

export const updateLifeGPA = dispatch => {
  dispatch({ type: UPDATE_LIFEGPA_START });
  const habits = store.getState().habits.habits;
  const totals = habits.reduce(
    (total, habit) => {
      total.thirty += habit.gpa.thirty;
      total.sixty += habit.gpa.sixty;
      total.ninety += habit.gpa.ninety;
      total.all += habit.gpa.ninety;
      total.days =
        habit.history.length > total.days ? habit.history.length : total.days;
      return total;
    },
    {
      thirty: 0,
      sixty: 0,
      ninety: 0,
      all: 0,
      days: 1
    }
  );

  dispatch({
    type: UPDATE_LIFEGPA_SUCCESS,
    payload: {
      thirty: Math.round(totals.thirty / totals.days),
      sixty: Math.round(totals.sixty / totals.days),
      ninety: Math.round(totals.ninety / totals.days),
      all: Math.round(totals.ninety / totals.days)
    }
  });
};

export const updateGPA = updatedHabit => dispatch => {
  dispatch({ type: UPDATE_GPAS_START });
  dispatch(updateHabit(updatedHabit));
  const habits = store.getState().habits.habits;
  const updatedHabits = habits.map(habit => {
    if (habit.id === updateHabit.id) {
      habit.gpa = unpackHabit(updatedHabit).GPA;
    }
    return habit;
  });
  dispatch({ type: UPDATE_GPAS_SUCCESS, payload: updatedHabits });
  dispatch(updateLifeGPA);
};

export const setUpdateForm = habit => {
  return {
    type: SET_UPDATE_FORM,
    payload: habit
  };
};

export const setUpdateBox = habit => {
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
