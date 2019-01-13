import {ADD_TO_CART, GET_ITEMS, GET_ITEMS_TO_SHOW} from '../actions/types'
const initialState = {
    items: [],
    itemsToShow: [],
    itemsInCart: [],
};

export default  (state = initialState, action) => {
    switch (action.type){
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                itemsToShow: action.payload
            };
        case GET_ITEMS_TO_SHOW:
            return {
                ...state,
                itemsToShow: action.payload
            };
        case ADD_TO_CART:
            return {
                ...state,
                itemsInCart: [...action.payload]
            };
        default:
            return state
    }
}