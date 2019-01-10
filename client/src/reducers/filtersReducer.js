import {GET_FILTER, DELETE_FILTER, GET_TO_FILTER, GET_NEXT_TO_FILTER,DELETE_FROM_FILTER} from "../actions/types";


const initialState = {
    category: [],
    price: [],
    colors: [],
    size:[],
    brands: [],
    filter:{}


};

export default  (state = initialState, action) => {
    switch (action.type){
        case GET_FILTER:
            return {
                ...state,
                [action.filterName]: [...state[action.filterName], action.payload]
            };
        case GET_TO_FILTER:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    [action.filterName]: [action.payload]
                }
            };
        case GET_NEXT_TO_FILTER:
            console.log('odpalono')
            return {
                ...state,
                filter: {
                    ...state.filter,
                    [action.filterName]: [...state.filter[action.filterName], action.payload]
                }
            };
        case DELETE_FROM_FILTER:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    [action.filterName]: action.payload
                }
            };
        case DELETE_FILTER:
            return {
                ...state,
                [action.filterName]:  action.payload
            };

        default:
            return state
    }
}
