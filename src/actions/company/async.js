import { callFindCompany } from '../../api/company';
import { setCompany } from './sync';

export const fetchCompany = () => dispatch =>
    callFindCompany().then(data => dispatch(setCompany(data)));