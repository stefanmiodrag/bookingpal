import { SET_COMPANY, } from '../../actionTypes';

export const setCompany = (company) => ({
    type: SET_COMPANY,
    ...company
});