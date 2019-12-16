import { callFindService } from '../../api/service';
import { setService } from './sync';

export const fetchServices = () => dispatch =>
    callFindService().then(data => dispatch(setService(data)));

