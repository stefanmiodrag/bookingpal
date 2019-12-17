import { checkOkAndJSON } from './utils';

export const callLogIn = (email, password) =>
    fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(checkOkAndJSON)

export const callLogOut = () =>
    fetch('http://localhost:3000/api/v1/logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(checkOkAndJSON)

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

export const callFindUsers = () =>
    fetch('http://localhost:3000/api/v1/users', {
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