import { callFindProduct } from '../../api/product';
import { setProducts } from './sync';

export const fetchProducts = () => dispatch =>
    callFindProduct().then(data => dispatch(setProducts(data)));

