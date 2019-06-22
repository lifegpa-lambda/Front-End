import axios from "axios";

export const FETCH_HABITS_START = "FETCH_HABITS_START";
export const FETCH_HABITS_SUCCESS = "FETCH_HABITS_SUCCESS";
export const FETCH_HABITS_ERROR = "FETCH_HABITS_ERROR";

export const getHabits = () = dispatch => {
    dispatch({ type: FETCH_HABITS_START });
    axios.get("http://localhost:5000/api/friends", {
        headers: {Authorization: localStorage.getItem('token') }
    })
    .then(response => {
        console.log("getHabits response.data", response.data);
        dispatch({ type: FETCH_HABITS_SUCCESS, payload: response.data })
    })
    .catch(error => {
        console.log("getHabits error", error);
        dispatch({ type: FETCH_HABITS_ERROR, payload: error.response.data.error });
    });
};