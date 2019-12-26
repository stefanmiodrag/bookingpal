import { callFindProduct, callFindProductByCompany } from '../../api/product';
import { setProducts } from './sync';

export const fetchProducts = () => dispatch =>
    callFindProduct().then(data => dispatch(setProducts(data)));

export const fetchProductsByCompany = (slug) => dispatch =>
    callFindProductByCompany(slug).then(data => dispatch(setProducts(data)));

