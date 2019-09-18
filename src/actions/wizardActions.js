import axios from 'axios';
import {
    GO_TO_PAGE,
    FETCH_WIZARD,
    UPDATE_WIZARD
} from './types';

import { SECTION_02, SECTION_REVIEW } from '../components/wizard/section-types'

export const reloadWizard = (id, loggedInUserId) => dispatch => {
    console.log('fetching HTTP');
    axios.get('http://localhost:8080/user/' + loggedInUserId + '/profile')
    .then((response) => {
        const wizard = response.data;
        let currentpage = SECTION_REVIEW;

        if (loggedInUserId === wizard.createdBy && wizard.status.name === 'DRAFT') {
            currentpage = SECTION_02;
        }

        dispatch({
            type: UPDATE_WIZARD,
            payload: {
                currentpage: currentpage

            }
        })
    });
}

export const fetchWizard = () => dispatch => {
    dispatch({
        type: FETCH_WIZARD
    })
}

export const goToNextPage = (currentpage, count) => dispatch => {
    dispatch({
        type: GO_TO_PAGE,
        currentpage: currentpage + count
    })
}

export const goToPreviousPage = (currentpage, count) => dispatch => {
    dispatch({
        type: GO_TO_PAGE,
        currentpage: currentpage - count
    })
}

export const goToFirstPage = () => dispatch => {
    dispatch({
        type: GO_TO_PAGE,
        currentpage: 1
    })
}

export const goToPage = (page) => dispatch => {
    dispatch({
        type: GO_TO_PAGE,
        currentpage: page
    })
}

export const updateWizard = (section, data) => dispatch => {
    dispatch({
        type: UPDATE_WIZARD,
        payload: {
            [section]: data
        }
    })
}

export const saveWizard = (userId, data) => dispatch => {
    axios.put('http://localhost:8080/wizard/' + userId, data, null)
        .then((response) => {
            const wizard = response.data;
            dispatch({
                type: UPDATE_WIZARD,
                payload: {
                    wizardid: wizard.id
                }
            })
        })
}

export const submitWizard = (userId, data) => dispatch => {
    axios.put('http://localhost:8080/wizard/' + userId, data, null)
        .then((response) => {

            axios.post('http://localhost:8080/wizard/' + response.data.id + '/submit/' + userId)
            .then((response) => {
            
                const wizard = response.data;
                dispatch({
                    type: UPDATE_WIZARD,
                    payload: {
                        wizardid: wizard.id
                    }
                })
            })
        })
}

export const completeWizard = (userId, data) => dispatch => {
    axios.put('http://localhost:8080/wizard/' + userId, data, null)
        .then((response) => {

            axios.post('http://localhost:8080/wizard/' + response.data.id + '/complete/' + userId)
            .then((response) => {
            
                const wizard = response.data;
                dispatch({
                    type: UPDATE_WIZARD,
                    payload: {
                        wizardid: wizard.id
                    }
                })
            })
        })
}
