import { SET_CATALOGS } from '../../actionTypes';

export const setCatalog = (catalogs) => ({
    type: SET_CATALOGS,
    ...catalogs
});