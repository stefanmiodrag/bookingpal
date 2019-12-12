import { checkOkAndJSON } from './utils';

export const callNewBooking = (service, customer, startTime, endTime) =>
    fetch('http://localhost:3000/api/v1/booking', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({ service, customer, startTime, endTime })
    })
        .then(checkOkAndJSON);

export const callFindBooking = () =>
    fetch('http://localhost:3000/api/v1/booking', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(checkOkAndJSON);