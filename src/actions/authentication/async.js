import cookie from "js-cookie";

import { callLogIn, callLogOut } from '../../api/auth';
import { init } from '../app';
import { setLoggedIn, setLoggedOut } from './sync';

export const logIn = (email, password) => dispatch =>
    callLogIn(email, password).then(() => dispatch(setLoggedIn()));


export const logOut = () => dispatch =>
    callLogOut().then(() => dispatch(setLoggedOut()));


export const checkIfAuthenticated = () => dispatch => {
    const token = cookie.get('token')
    // checking if token is valid...
    if (token !== undefined) {
        return dispatch(init()).then(() => dispatch(setLoggedIn()));
    }

    // if token doesn't exist we are not logged in.
    dispatch(setLoggedOut());
}
