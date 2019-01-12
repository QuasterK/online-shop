import {GET_LOGIN_ERROR, SET_CURRENT_USER} from "../actions/types";

const initState = {
    isAuth: false,
    user: {},
    errors: {},
};

const authReducer = (state = initState, action) =>  {
    switch (action.type){
        case GET_LOGIN_ERROR:
            return {
                ...state,
                errors: action.payload
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuth: true,
                user: action.payload
            };
        default:
            return state
    }
};

export default authReducer;