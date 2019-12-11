import { SET_LOGGED_IN, SET_LOGGED_OUT } from "../actionTypes";

const initialState = {
  loggedIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return {
        loggedIn: true,
      };
    case SET_LOGGED_OUT:
      return {
        loggedIn: false,
      };
    default:
      break;
  }
  return state;
}