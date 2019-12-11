import { fetchUser } from '../user';

export const init = () => dispatch => {
    return Promise.all([
        dispatch(fetchUser()),
    ])
        .catch(err => (err.message))
};