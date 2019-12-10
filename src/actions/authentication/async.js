import { callLogIn, callLogOut } from '../../api/auth';
import { setLoggedIn, setLoggedOut } from './sync';

export const logIn = (email, password) => dispatch =>
    callLogIn(email, password).then(() => dispatch(setLoggedIn()));
