import { SET_SERVICES } from '../../actionTypes';

export const setService = (services) => ({
    type: SET_SERVICES,
    ...services
});