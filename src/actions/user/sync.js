import { SET_USER, SET_COMPANY_USERS } from '../../actionTypes';

export const setUser = (user) => ({
    type: SET_USER,
    ...user
});

export const setUsers = (users) => ({
    type: SET_COMPANY_USERS,
    ...users
});