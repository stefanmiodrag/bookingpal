import { fetchUser, fetchUsers } from "../user";
import { fetchCompany } from "../company";
import { fetchBookings } from "../booking";
import { setInitializing } from "./sync";

export const init = () => dispatch => {
    dispatch(setInitializing(true));

    return Promise.all([
        dispatch(fetchUser()),
        dispatch(fetchCompany()),
        dispatch(fetchUsers()),
        dispatch(fetchBookings())
    ])
        .catch(err => (err.message))
        .finally(() => dispatch(setInitializing(false)));
};