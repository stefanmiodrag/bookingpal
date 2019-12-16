import { checkOkAndJSON } from './utils';

export const callNewCatalog = (name, slug) =>
    fetch('http://localhost:3000/api/v1/catalog', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, slug })
    })
        .then(checkOkAndJSON);

export const callRemoveCatalog = (id) =>
    fetch(`http://localhost:3000/api/v1/catalog/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(checkOkAndJSON);

export const callFindCatalog = () =>
    fetch('http://localhost:3000/api/v1/catalog', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(checkOkAndJSON);