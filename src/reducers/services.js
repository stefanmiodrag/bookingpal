import { SET_SERVICES } from "../actionTypes";

const initialState = {
    services: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SERVICES:
            return {
                ...state,
                services: action.services
            }
        default:
            break;
    }
    return state;
}