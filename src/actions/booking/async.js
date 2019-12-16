import { callFindBookings } from '../../api/booking';
import { setBookings } from './sync';

export const fetchBookings = () => dispatch =>
    callFindBookings().then(data => dispatch(setBookings(data)));

