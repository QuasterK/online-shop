import {GET_COLOR} from "../actions/types";
import {DELETE_COLOR} from "../actions/types";
// eslint-disable-next-line
import {GET_CATEGORY} from "../actions/types";
// eslint-disable-next-line
import {GET_BRAND} from "../actions/types";
// eslint-disable-next-line
import {GET_PRICE} from "../actions/types";
// eslint-disable-next-line
import {GET_SIZE} from "../actions/types";

export const getColor = color => dispatch => {
  dispatch({
      type: GET_COLOR,
      payload: color
      }
  )
};

export const deleteColor = color => dispatch => {
    dispatch({
        type: DELETE_COLOR,
        payload: color
    })
};