import {GET_ITEMS} from './types';
import axios from "axios/index";

//get all items
export const getItems = () => dispatch => {

    axios({
        method:'get',
        url:'api/item/get'
    })
        .then(res =>
            dispatch({
                type:GET_ITEMS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type:GET_ITEMS,
                payload: err
            })
        )
};