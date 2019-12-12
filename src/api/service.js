import { checkOkAndJSON } from './utils';

export const callNewService = (name, slug, duration, price, currency) =>
    fetch('http://localhost:3000/api/v1/service', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, slug, duration, price, currency })
    })
        .then(checkOkAndJSON);


export const callFindService = () =>
    fetch('http://localhost:3000/api/v1/service/', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(checkOkAndJSON);