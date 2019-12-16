import { SET_BOOKINGS } from "../actionTypes";

const initialState = {
    bookings: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKINGS:
            return {
                ...state,
                bookings: action.bookings
            }
        default:
            break;
    }
    return state;
}