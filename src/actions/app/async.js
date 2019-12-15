import { fetchUser } from '../user';
import { fetchCompany } from '../company';
import { setInitializing } from './sync';

export const init = () => dispatch => {
    dispatch(setInitializing(true));

    return Promise.all([
        dispatch(fetchUser()),
        dispatch(fetchCompany()),
    ])
        .catch(err => (err.message))
        .finally(() => dispatch(setInitializing(false)));
};