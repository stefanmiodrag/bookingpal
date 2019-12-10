import { SET_LOGGED_IN, SET_USER, SET_LOGGED_OUT } from '../../actionTypes';

export const setLoggedIn = () => ({
    type: SET_LOGGED_IN,
});

export const setUser = (user) => ({
    type: SET_USER,
    user
});

export const setLoggedOut = () => ({
    type: SET_LOGGED_OUT,
});