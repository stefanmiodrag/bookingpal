import { fetchUser } from '../user';
import { fetchCompany } from '../company';

export const init = () => dispatch => {
    return Promise.all([
        dispatch(fetchUser()),
        dispatch(fetchCompany()),
    ])
        .catch(err => (err.message))
};