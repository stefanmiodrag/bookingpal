import { SET_BOOKINGS } from '../../actionTypes';

export const setBookings = (bookings) => ({
    type: SET_BOOKINGS,
    ...bookings
});