import { checkOkAndJSON } from './utils';

export const callNewProduct = (name, slug, duration, price, currency) =>
    fetch('http://localhost:3000/api/v1/product', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, slug, duration, price, currency })
    })
        .then(checkOkAndJSON);

export const callRemoveProduct = (id) =>
    fetch(`http://localhost:3000/api/v1/product/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(checkOkAndJSON);

export const callFindProduct = () =>
    fetch('http://localhost:3000/api/v1/product', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(checkOkAndJSON);