import { INIT_LOADING } from "../actionTypes";

const initialState = {
    isLoading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INIT_LOADING:
            return {
                isLoading: action.isLoading,
            };
        default:
            break;
    }
    return state;
}