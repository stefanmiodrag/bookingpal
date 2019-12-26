import { callFindCompany, callFindCompanyAsCustomer } from '../../api/company';
import { setCompany } from './sync';

export const fetchCompany = () => dispatch =>
    callFindCompany().then(data => dispatch(setCompany(data)));

export const fetchCompanyAsCustomer = (slug) => dispatch =>
    callFindCompanyAsCustomer(slug).then(data => dispatch(setCompany(data)));