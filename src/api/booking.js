import { checkOkAndJSON } from './utils';

export const callNewBooking = (service, customer, startDate, startTime, endTime) =>
    fetch('http://localhost:3000/api/v1/booking', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({ service, customer, startDate, startTime, endTime })
    })
        .then(checkOkAndJSON);

export const callNewBookingByCustomer = (service, customer, startTime, endTime, company) =>
    fetch('http://localhost:3000/api/v1/public/booking/', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({ service, customer, startTime, endTime, company })
    })
        .then(checkOkAndJSON);


export const callFindBookings = () =>
    fetch('http://localhost:3000/api/v1/booking', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(checkOkAndJSON);