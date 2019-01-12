import {combineReducers} from 'redux'
import itemReducer from './itemReducer';
import filtersReducer from './filtersReducer'
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    item: itemReducer,
    filters: filtersReducer,
    auth: authReducer
});

export default rootReducer;