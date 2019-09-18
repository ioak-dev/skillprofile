import axios from 'axios';
import {
    FETCH_VIEW,
    UPDATE_VIEW
} from './types';

export const reloadView = (type, loggedInUserId) => dispatch => {
    console.log('fetching HTTP');
    axios.get('http://localhost:8080/wizard/' + type + '/' + loggedInUserId)
    .then((response) => {
        dispatch({
            type: UPDATE_VIEW,
            payload: {
                view: response.data
            }
        })
    });
}

export const removeItem = (type, loggedInUserId, requestId) => dispatch => {
    console.log('fetching HTTP');
    axios.delete('http://localhost:8080/wizard/' + requestId)
    .then(() => {
        axios.get('http://localhost:8080/wizard/' + type + '/' + loggedInUserId)
        .then((response) => {
            dispatch({
                type: UPDATE_VIEW,
                payload: {
                    view: response.data
                }
            })
        });
    });
}

export const fetchView = () => dispatch => {
    dispatch({
        type: FETCH_VIEW
    })
}
