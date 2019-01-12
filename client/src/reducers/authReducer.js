import {GET_LOGIN_ERROR, SET_CURRENT_USER} from "../actions/types";

const initState = {
    isAuth: false,
    user: {},
    errors: {},
};

const authReducer = (state = initState, action) =>  {
    if (action.type === GET_LOGIN_ERROR) {
        return {
            ...state,
            errors: action.payload
        };
    } else if (action.type === SET_CURRENT_USER) {
        return {
            ...state,
            isAuth: !(typeof action.payload === 'object' && Object.keys(action.payload).length === 0),
            user: action.payload
        };
    } else {
        return state
    }
};

export default authReducer;