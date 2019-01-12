import axios from 'axios';

export const registerUser = (userData, history) => dispatch => {
    axios.post('/api/users/register', userData)
        .then(() => history.push('/login'))
        .catch(err => console.log(err))
};
