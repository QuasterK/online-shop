import {GET_ITEMS, GET_ITEMS_TO_SHOW} from '../actions/types'
const initialState = {
    items: [],
    itemsToShow: []
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
        default:
            return state
    }
}