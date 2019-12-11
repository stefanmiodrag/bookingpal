import { callGetUser } from '../../api/auth';
import { setUser } from './sync';

export const fetchUser = () => dispatch =>
    callGetUser().then(data => dispatch(setUser(data)));
