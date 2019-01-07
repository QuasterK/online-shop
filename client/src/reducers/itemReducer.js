import {GET_ITEMS} from '../actions/types'
const initialState = {
    items: []
};

export default  (state = initialState, action) => {
    switch (action.type){
        case GET_ITEMS:
            return {
                items: action.payload
            };
        default:
            return state
    }
}