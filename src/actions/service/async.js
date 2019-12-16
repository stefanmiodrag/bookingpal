import { callFindServices } from '../../api/service';
import { setServices } from './sync';

export const fetchBookings = () => dispatch =>
    callFindServices().then(data => dispatch(setServices(data)));

