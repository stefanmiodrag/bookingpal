import { callFindCatalog } from '../../api/catalog';
import { setCatalog } from './sync';

export const fetchCatalogs = () => dispatch =>
    callFindCatalog().then(data => dispatch(setCatalog(data)));

