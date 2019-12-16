import { SET_CATALOGS } from "../actionTypes";

const initialState = {
    catalogs: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CATALOGS:
            return {
                ...state,
                catalogs: action.catalogs
            }
        default:
            break;
    }
    return state;
}