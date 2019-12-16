import { SET_USER, SET_COMPANY_USERS } from "../actionTypes";

const initialState = {
    user: null,
    users: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case SET_COMPANY_USERS:
            return {
                ...state,
                users: action.users
            }
        default:
            break;
    }
    return state;
}