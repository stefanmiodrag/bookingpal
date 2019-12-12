import { callFindUser } from '../../api/auth';
import { setUser } from './sync';

export const fetchUser = () => dispatch =>
    callFindUser().then(data => dispatch(setUser(data)));
