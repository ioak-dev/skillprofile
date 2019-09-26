import {
    GO_TO_PAGE,
    FETCH_WIZARD,
    UPDATE_WIZARD,
} from '../actions/types';

const initialState = {
    currentpage: 2,
    profile: [
        {
            name: 'Shashank',
            empId: '700',
            designation:'Senior Consultant',
            primaryTech: 'FrontEnd',
            primarySkill: 'JavaScript',
            billability: true,
            careerStartDate: '',
            joiningDate: '',
            carrerGapYears: 1,
            carrerGapMonths: 0,
            totalExpYears: 6,
            totalExpMonths: 0,
            functionalExpYears: 0,
            functionalExpMonths: 0,
            previousWesternacherExpYears: 0,
            previousWesternacherExpMonths: 0,
            totalWesternacherExpYears: 1,
            totalWesternacherExpMonths: 8
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
