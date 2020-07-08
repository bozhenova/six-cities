import axios from 'axios';
import history from '../history';
import { Constants } from '../constants';

const configureAPI = () => {
  const api = axios.create({
    baseURL: Constants.BASE_URL,
    timeout: Constants.TIMEOUT,
    withCredentials: true
  });

  const onSuccess = response => response.data;
  const onFail = err => {
    if (err.response.status === Constants.ACCESS_DENIED) {
      history.push(`/login`);
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default configureAPI;
