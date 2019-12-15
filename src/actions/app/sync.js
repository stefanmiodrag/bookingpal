import { INIT_LOADING } from '../../actionTypes';

export const setInitializing = (isLoading) => ({
    type: INIT_LOADING,
    isLoading: isLoading
});