import {
    GO_TO_PAGE,
    FETCH_WIZARD,
    UPDATE_WIZARD,
} from '../actions/types';

const initialState = {
    currentpage: 2,
    profile: [
        {
            firstName: '',
            lastName: ''
        }
    ],
    geography: [
    ],
    "IT & SAP Expertise": [
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
                console.log(action.payload);
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
