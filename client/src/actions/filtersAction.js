import {GET_FILTER, DELETE_FILTER, GET_TO_FILTER, GET_NEXT_TO_FILTER, DELETE_FROM_FILTER} from "../actions/types";


export const getFilter = (filterName, value) => dispatch => {
    dispatch({
        type: GET_FILTER,
        filterName: filterName,
        payload: value
    })
};

export const getToFilter = (filterName, value) => dispatch => {
  dispatch({
      type: GET_TO_FILTER,
      filterName: filterName,
      payload: value
      }
  )
};

export const getNextToFilter = (filterName, value) => dispatch => {
    dispatch({
            type: GET_NEXT_TO_FILTER,
            filterName: filterName,
            payload: value
        }
    )
};

export const deleteFromFilter = (filterName, array) => dispatch => {
    dispatch({
        type: DELETE_FROM_FILTER,
        filterName: filterName,
        payload: array
    })
};

export const deleteFilter = (filterName, value) => dispatch => {
    dispatch({
        type: DELETE_FILTER,
        filterName:filterName,
        payload: value
    })
};

