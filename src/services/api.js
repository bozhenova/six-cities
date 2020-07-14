import axios from 'axios';
import { Constants } from '../constants';
import { ActionCreators } from '../redux/reducer/user/actions';
import history from '../history';

const configureAPI = onLoginFail => {
  const api = axios.create({
    baseURL: Constants.BASE_URL,
    timeout: Constants.TIMEOUT,
    withCredentials: true
  });

  const onSuccess = response => response.data;

  const onFail = err => {
    if (err.response.status === Constants.ACCESS_DENIED) {
      onLoginFail();
      // history.push(`/login`);
      return false;
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default configureAPI;
