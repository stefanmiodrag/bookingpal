import { callFindUser, callFindUsers } from '../../api/auth';
import { setUser, setUsers } from './sync';

export const fetchUser = () => dispatch =>
    callFindUser().then(data => dispatch(setUser(data)));

export const fetchUsers = () => dispatch =>
    callFindUsers().then(data => dispatch(setUsers(data)));
