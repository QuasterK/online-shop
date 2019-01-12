import axios from 'axios';
import {GET_LOGIN_ERROR, SET_CURRENT_USER} from './types';
import{setAuthToken} from'./setAuthToken';
import jwt_decode from'jwt-decode';

export const registerUser = (userData, history) => dispatch => {
    axios.post('/api/users/register', userData)
        .then(() => history.push('/login'))
        .catch(err => console.log(err))
};

export const loginUser = (userData, history) => dispatch => {
    axios.post('/api/users/login', userData)
        .then(res=> {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
        .then(() => history.push('/'))
        .catch(err =>
            dispatch({
                type:GET_LOGIN_ERROR,
                payload: err.response.data
            }))
};

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};
