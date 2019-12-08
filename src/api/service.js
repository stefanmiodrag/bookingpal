import { checkOkAndJSON } from './utils';

export const callNewService = (name, slug, duration, price, currency) => {
    if (!name || !duration || !price || !currency) {
        Promise.reject('Missing all required inputs');
    }

    fetch('http://localhost:3000/api/v1/service', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, slug, duration, price, currency })
    })
        .then(checkOkAndJSON)
        .then(res => {
            return Promise.resolve(res);
        })
        .catch(err => {
            return alert(err.status);
        })
};

export const callFindService = () =>
    fetch('http://localhost:3000/api/v1/service', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(checkOkAndJSON);