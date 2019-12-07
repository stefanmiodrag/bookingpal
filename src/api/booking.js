import { checkOkAndJSON } from './utils';

export const callNewBooking = (service, customer, startTime, endTime) => {
    if (!service || !customer || !startTime || !endTime) {
        Promise.reject('Missing all required inputs');
    }

    fetch('http://localhost:3000/api/v1/booking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ service, customer, startTime, endTime })
    })
        .then(checkOkAndJSON)
        .then(res => {
            return Promise.resolve(res);
        })
        .catch(err => {
            return alert(err.status);
        })
};