import cookie from 'js-cookie'
import { checkOkAndJSON } from './utils';

export const callLogIn = (email, password) => {
    if (!email || !password) {
        Promise.reject('Missing email or password');
    }

    fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })
        .then(checkOkAndJSON)
        .then(res => {
            cookie.set('token', res.token, { expires: 7 });
            return Promise.resolve(res);
        })
        .catch(err => {
            return alert(err.status);
        })
};

export const checkIfAuthenticated = () => {
    const token = cookie.get('token')

    if (token !== undefined) {
        return true;
    };
};

export const callLogOut = () => {
    cookie.remove('token');
};
