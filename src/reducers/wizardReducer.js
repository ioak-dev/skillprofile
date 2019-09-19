import {
    GO_TO_PAGE,
    FETCH_WIZARD,
    UPDATE_WIZARD,
} from '../actions/types';

const initialState = {
    currentpage: 2,
    profile: [
        {name: 'Shashank'}
    ],
    geography: [
        {topic: 'India', years: 1, months: 6},
        {topic: 'USA', years: 3, months: 0},
        {topic: 'France', years: 0, months: 3},
        {topic: 'DE', years: 0, months: 3}
    ],
    domain: [
        {topic: 'Logistics', years: 2, months: 2},
        {topic: 'Finance', years: 1, months: 4}
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GO_TO_PAGE:
            console.log("reducer GO_TO_PAGE");
            return {
                ...state,
                currentpage: action.currentpage
            }
            case UPDATE_WIZARD:
                console.log("reducer UPDATE_WIZARD");
                return {
                    ...state,
                    ...action.payload
                }
        case FETCH_WIZARD:
            console.log("reducer FETCH_WIZARD");
            return {
                ...state
            }
        default:
            return state;
    }
}
