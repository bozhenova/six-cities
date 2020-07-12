import { ActionTypes as types } from '../../ActionTypes';
import { Constants } from '../../../constants';
import { adaptLoginResponse } from '../../../adapter';
import history from '../../../history';

export const ActionCreator = {
  setUserData: user => ({
    type: types.SET_USER_DATA,
    payload: user
  }),
  requiredAuthorization: status => ({
    type: types.SET_AUTHORIZATION_REQUIRED,
    payload: status
  }),
  setError: error => ({
    type: types.SET_ERROR,
    payload: error
  })
};

export const Operations = {
  loadLoginData: () => (dispatch, _getState, api) => {
    api.get(Constants.LOGIN_PATH).then(response => {
      if (response.status === Constants.STATUS_OK) {
        const loginData = adaptLoginResponse(response);
        dispatch(ActionCreator.setUserData(loginData));
        dispatch(ActionCreator.requiredAuthorization(false));
      } else {
        dispatch(ActionCreator.setError(response.message));
      }
    });
  },
  authorize: formData => (dispatch, _getState, api) => {
    return api.post(Constants.LOGIN_PATH, formData).then(response => {
      const loginData = adaptLoginResponse(response);
      dispatch(ActionCreator.setUserData(loginData));
      dispatch(ActionCreator.requiredAuthorization(false));
      history.push(`/`);
    });
  }
};
