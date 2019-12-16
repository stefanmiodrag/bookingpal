import { SET_SERVICES } from '../../actionTypes';

export const setServices = (services) => ({
    type: SET_SERVICES,
    ...services
});