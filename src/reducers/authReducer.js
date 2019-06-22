import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from "../actions/authActions";


const initialState = {
    habits: [],
    fetching: false,
    error: null,
    loading: true,
    loggingIn: false
    token: localStorage.getItem('token')


}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START: 
        console.log("Auth reducer state", state);
        console.log("Auth reducer action", action);
        return {
            ...state
            loggingIn: true,
            error: null,
        }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                error: null,
                token: localStorage.getItem('token')

            }
            case LOGIN_ERROR:
                return {
                    ...state,
                    loggingIn: false,
                    error: action.payload
                }
                default: return state;
    };
} 