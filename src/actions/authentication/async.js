import cookie from 'js-cookie';

import history from '../../store/history';
import { callLogIn, callLogOut } from '../../api/auth';
import { init } from '../app';
import { setLoggedIn, setLoggedOut } from './sync';

export const logIn = (email, password) => dispatch => {
    const onPostLogin = () => {
        history.push('/');
        return dispatch(init()).then(dispatch(setLoggedIn()));
    }

    return callLogIn(email, password).then(onPostLogin);
}

export const logOut = () => dispatch => {
    const onPostLogout = () => {
        history.push('/auth/login');
        return dispatch(setLoggedOut());
    };

    return callLogOut().then(onPostLogout);
};

export const checkIfAuthenticated = () => dispatch => {
    const token = cookie.get('token')
    // checking if token is valid...
    if (token !== undefined) { /* TODO: setLoggedOut if token isn't valid */
        return dispatch(init()).then(() => dispatch(setLoggedIn()));
    }

    // if token doesn't exist we are not logged in.
    dispatch(setLoggedOut());
};