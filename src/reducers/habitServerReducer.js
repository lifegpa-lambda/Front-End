import {
  FETCH_HABITS_START,
  FETCH_HABITS_SUCCESS,
  FETCH_HABITS_ERROR,
  ADD_HABIT_START,
  ADD_HABIT_SUCCESS,
  ADD_HABIT_ERROR
} from "../actions/habitActions";

const initialState = {
  habits: [],
  fetching: false,
  error: null,
  addingHabit: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HABITS_START:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case FETCH_HABITS_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        habits: action.payload
      };
    case FETCH_HABITS_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case ADD_HABIT_START:
      return {
        ...state,
        addingHabit: true,
        error: null
      };
    case ADD_HABIT_SUCCESS:
      return {
        ...state,
        addingHabit: false,
        error: null,
        habits: action.payload
      };
    case ADD_HABIT_ERROR:
      return {
        ...state,
        addingHabit: false,
        error: action.payload
      };
    default:
      return state;
  }
};
