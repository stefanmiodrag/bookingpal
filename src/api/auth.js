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
};

export const checkIfAuthenticated = () => {
    const token = cookie.get('token')
    // checking if token is valid...
    if (token !== undefined) { return true };
};

export const callLogOut = () => {
    cookie.remove('token');
    // reload page after removing cookie
};

export const callSignup = (email, username, password, company, role) =>
    fetch('http://localhost:3000/api/v1/register', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password, company, role })
    })
        .then(checkOkAndJSON)

export const callFindUser = () =>
    fetch('http://localhost:3000/api/v1/user', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(checkOkAndJSON);

export const callUpdateUser = (company, role) =>
    fetch('http://localhost:3000/api/v1/user', {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({ company, role })
    })
        .then(checkOkAndJSON);