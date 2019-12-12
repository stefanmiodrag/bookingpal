import { SET_COMPANY } from "../actionTypes";

const initialState = {
    company: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_COMPANY:
            return {
                ...state,
                company: action.company
            }
        default:
            break;
    }
    return state;
}