import {
  FETCH_HABITS_START,
  FETCH_HABITS_SUCCESS,
  FETCH_HABITS_ERROR
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
    default:
      return state;
  }
};
