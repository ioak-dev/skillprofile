import {
    GO_TO_PAGE,
    FETCH_WIZARD,
    UPDATE_WIZARD,
} from '../actions/types';
import moment from 'moment';

const initialState = {
    currentpage: 2,
    profile: [
        {
            firstName: '',
            lastName: '',
            empId: '',
            designation:'',
            primaryTech: '',
            primarySkill: '',
            billability: true,
            careerStartDate: moment().toDate(),
            joiningDate: '',
            carrerGapYears: 0,
            carrerGapMonths: 0,
            totalExpYears: 0,
            totalExpMonths: 0,
            functionalExpYears: 0,
            functionalExpMonths: 0,
            previousWesternacherExpYears: 0,
            previousWesternacherExpMonths: 0,
            totalWesternacherExpYears: 0,
            totalWesternacherExpMonths: 0
        },
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
