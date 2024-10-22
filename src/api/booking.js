import { checkOkAndJSON } from './utils';

export const callNewBooking = (service, customer, start_date, start_time, end_time) =>
    fetch('http://localhost:3000/api/v1/booking', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({ service, customer, start_date, start_time, end_time })
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