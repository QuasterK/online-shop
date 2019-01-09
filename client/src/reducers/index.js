import {combineReducers} from 'redux'
import itemReducer from './itemReducer';
import filtersReducer from './filtersReducer'

const rootReducer = combineReducers({
    item: itemReducer,
    filters: filtersReducer
});

export default rootReducer;