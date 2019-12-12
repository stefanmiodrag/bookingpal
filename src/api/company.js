import { checkOkAndJSON } from './utils';

export const callNewCompany = (name, slug, users) => {
    if (!name || !slug || !users) {
        Promise.reject('Missing name, slug or users');
    }

    return fetch('http://localhost:3000/api/v1/company', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({ name, slug, users })
    })
        .then(checkOkAndJSON)
};

export const callFindCompany = () =>
    fetch('http://localhost:3000/api/v1/company', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(checkOkAndJSON);
