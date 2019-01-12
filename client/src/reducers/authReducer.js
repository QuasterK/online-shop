import {REGISTER_USER} from "../actions/types";

const initState = {
    isAuth: false,
    user: ''
};

const authReducer = (state = initState, action) =>  {
    switch (action.type){
        case '':
            return {
                ...state,
            };
        default:
            return state
    }
};

export default authReducer;