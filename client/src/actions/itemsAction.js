import {GET_ITEMS, GET_ITEMS_TO_SHOW} from './types';
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
//get items that have to be displayed on screen
export const getItemsToShow = itemsData => dispatch => {
    dispatch({
        type: GET_ITEMS_TO_SHOW,
        payload: itemsData
    })
};