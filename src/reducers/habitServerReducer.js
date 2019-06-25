import {
  FETCH_HABITS_START,
  FETCH_HABITS_SUCCESS,
  FETCH_HABITS_ERROR,
  ADD_HABIT_START,
  ADD_HABIT_SUCCESS,
  ADD_HABIT_ERROR,
  DELETE_HABIT_START,
  DELETE_HABIT_SUCCESS,
  DELETE_HABIT_ERROR,
  UPDATE_HABIT_START,
  UPDATE_HABIT_SUCCESS,
  UPDATE_HABIT_ERROR,
  SET_UPDATE_FORM,
  FILTER_HABITS,
  TOGGLE_CHECKED
} from "../actions/habitActions";

const initialState = {
  habits: [
    {
      id: "",
      habitTitle: "",
      completed: 0,
      completionPoints: 0,
      userId: "",
      createdAt: ""
    }
  ],
  fetching: false,
  error: null,
  addingHabit: false,
  deletingHabit: false,
  updatingHabit: false,
  activeHabit: null,
  active: false,
  filteredHabits: "banana",
  checked: false
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
        habits: action.payload,
        user: 
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

    case DELETE_HABIT_START:
      return {
        ...state,
        deletingHabit: true,
        error: null
      };
    case DELETE_HABIT_SUCCESS:
      return {
        ...state,
        deletingHabit: false,
        error: null,
        habits: action.payload
      };
    case DELETE_HABIT_ERROR:
      return {
        ...state,
        deletingHabit: false,
        error: action.payload
      };

    case UPDATE_HABIT_START:
      return {
        ...state,
        updatingHabit: true,
        error: null
      };
    case UPDATE_HABIT_SUCCESS:
      return {
        ...state,
        updatingHabit: false,
        error: null,
        habits: action.payload
      };
    case UPDATE_HABIT_ERROR:
      return {
        ...state,
        updatingHabit: false,
        error: action.payload
      };
    case SET_UPDATE_FORM:
      return {
        ...state,
        activeHabit: action.payload,
        active: true
      };
    case FILTER_HABITS:
      return {
        ...state,
        habits: action.payload.length > 0 ? action.payload : state.habits
      };
    case TOGGLE_CHECKED:
      console.log("TOGGLE_CHECKED state", state);
      return {
        ...state
      };
    default:
      return state;
  }
};
