import {ADD_TO_CART, GET_ITEMS, GET_ITEMS_TO_SHOW, GET_ITEM} from '../actions/types'
const initialState = {
    items: [],
    item: {},
    itemsToShow: [],
    itemsInCart: [],
};

export default  (state = initialState, action) => {
    switch (action.type){
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                itemsToShow: state.itemsToShow.length <= 0 ? action.payload : state.itemsToShow
            };
        case GET_ITEM:
            return{
                ...state,
                item: action.payload
            };
        case GET_ITEMS_TO_SHOW:
            return {
                ...state,
                itemsToShow: action.payload
            };
        case ADD_TO_CART:
            return {
                ...state,
                itemsInCart: [...state.itemsInCart,action.payload]
            };
        default:
            return state
    }
}