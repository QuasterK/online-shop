import {DELETE_COLOR, GET_COLOR} from "../actions/types";
// eslint-disable-next-line
import {GET_CATEGORY} from "../actions/types";
// eslint-disable-next-line
import {GET_BRAND} from "../actions/types";
// eslint-disable-next-line
import {GET_PRICE} from "../actions/types";
// eslint-disable-next-line
import {GET_SIZE} from "../actions/types";

const initialState = {
    category: [],
    price: [],
    colors: [],
    size:[],
    brands: [],


};

export default  (state = initialState, action) => {
    switch (action.type){
        case GET_COLOR:
            return {
                ...state,
                colors: [...state.colors, action.payload]
            };
        case DELETE_COLOR:
            return {
                ...state,
                colors: action.payload
            };
        default:
            return state
    }
}
