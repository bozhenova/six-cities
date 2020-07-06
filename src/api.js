import axios from 'axios';

import { ActionCreators } from './redux/actions';
import { Constants } from './constants';

const configureAPI = dispatch => {
  const api = axios.create({
    baseURL: Constants.BASE_URL,
    timeout: Constants.TIMEOUT,
    withCredentials: true
  });

  const onSuccess = response => response.data;
  const onFail = err => {
    if (err.response.status === Constants.ACCESS_DENIED) {
      dispatch(ActionCreators);
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default configureAPI;
