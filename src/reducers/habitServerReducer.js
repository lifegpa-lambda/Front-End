import {
  FETCH_HABITS_START,
  FETCH_HABITS_SUCCESS,
  FETCH_HABITS_ERROR,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR,
  ADD_HABIT_START,
  ADD_HABIT_SUCCESS,
  ADD_HABIT_ERROR,
  DELETE_HABIT_START,
  DELETE_HABIT_SUCCESS,
  DELETE_HABIT_ERROR,
  UPDATE_HABIT_START,
  UPDATE_HABIT_SUCCESS,
  UPDATE_HABIT_ERROR,
  UPDATE_GPAS_START,
  UPDATE_GPAS_SUCCESS,
  UPDATE_LIFEGPA_START,
  UPDATE_LIFEGPA_SUCCESS,
  SET_UPDATE_FORM,
  FILTER_HABITS,
  TOGGLE_CHECKED,
  SET_ACTIVE_CATEGORY,
  CLEAR_CHECKED
} from "../actions/habitActions";

const initialState = {
  habits: [],
  lifeGPA: { thirty: 0, sixty: 0, ninety: 0, all: 0 },
  fetching: false,
  error: null,
  addingHabit: false,
  deletingHabit: false,
  updatingHabit: false,
  updatingGPAs: false,
  updatingLifeGPA: true,
  activeHabit: null,
  active: false,
  filteredHabits: "",
  checked: false,
  categories: [],
  categoryId: null,
  checkedGreen: "",
  checkedYellow: "",
  checkedRed: ""
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
    case FETCH_CATEGORIES_START:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        categories: action.payload
      };
    case FETCH_CATEGORIES_ERROR:
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
      // console.log("AHS", state.habits, action.payload);
      return {
        ...state,
        addingHabit: false,
        error: null,
        habits: state.habits.concat([action.payload])
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
        error: null
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
        error: null
      };
    case UPDATE_HABIT_ERROR:
      return {
        ...state,
        updatingHabit: false,
        error: action.payload
      };
    case UPDATE_GPAS_START:
      return {
        ...state,
        updatingGPAs: true
      };
    case UPDATE_GPAS_SUCCESS:
      // console.log(action.payload);
      return {
        ...state,
        updatingGPAs: false,
        habits: action.payload
      };
    case UPDATE_LIFEGPA_START:
      return {
        ...state,
        updatingLifeGPA: true
      };
    case UPDATE_LIFEGPA_SUCCESS:
      return {
        ...state,
        updatingLifeGPA: false,
        lifeGPA: action.payload
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
        filteredHabits: action.payload
      };
    case TOGGLE_CHECKED:
      // console.log("TOGGLE_CHECKED state", state);
      return {
        ...state
      };
    case SET_ACTIVE_CATEGORY:
      return {
        ...state,
        categoryId: action.payload
      };
    case CLEAR_CHECKED:
      // console.log("SET_ACTIVE_CATEGORY state", state);
      return {
        ...state
      };
    default:
      return state;
  }
};
