import { SET_PRODUCTS } from "../actionTypes";

const initialState = {
    products: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        default:
            break;
    }
    return state;
}