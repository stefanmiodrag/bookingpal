import { SET_USER } from "../actionTypes";

const initialState = {
    user: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            break;
    }
    return state;
}