import cookie from 'js-cookie'
import { checkOkAndJSON } from './utils';

export const callLogIn = (email, password) => {
    if (!email || !password) {
        Promise.reject('Missing email or password');
    }

    return fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(checkOkAndJSON)
    /*         .then(res => {
                setToken(res.token)
            }) */
};

// set cookie that expires within 7 days
export const setToken = (token) => cookie.set('token', token, { expires: 7 });

export const checkIfAuthenticated = () => {
    const token = cookie.get('token')
    // checking if token is valid...
    if (token !== undefined) { return true };
};

export const callLogOut = () => {
    cookie.remove('token');
    // reload page after removing cookie
    window.location.reload(false);
};

export const callSignup = (email, username, password) => {
    if (!email || !username || !password) {
        Promise.reject('Missing email, username or password');
    }

    fetch('http://localhost:3000/api/v1/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password })
    })
        .then(checkOkAndJSON)
        .then(res => {
            return Promise.resolve(res);
        })
        .catch(err => {
            return alert(err.status);
        })
};