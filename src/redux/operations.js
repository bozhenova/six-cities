import { ActionCreators } from './actions';
import { Constants } from '../constants';
import { adaptOffers, adaptComments, adaptLoginResponse } from '../adapter';
import history from '../history';

const Operations = {
  loadOffers: () => (dispatch, _getState, api) => {
    return api
      .get(Constants.HOTEL_PATH)
      .then(response => adaptOffers(response))
      .then(data => dispatch(ActionCreators.loadOffers(data)));
  },
  loadNearbyOffers: id => (dispatch, _getState, api) => {
    return api
      .get(`${Constants.HOTEL_PATH}/${id}${Constants.NEARBY_PATH}`)
      .then(response => adaptOffers(response))
      .then(data => dispatch(ActionCreators.loadNearbyOffers(data)));
  },
  loadReviews: id => {
    return (dispatch, _getState, api) => {
      return api
        .get(`${Constants.COMMENTS_PATH}/${id}`)
        .then(response => adaptComments(response))
        .then(data => {
          dispatch(ActionCreators.loadReviews(data));
        });
    };
  },
  loadLoginData: () => (dispatch, _getState, api) =>
    api.get(Constants.LOGIN_PATH).then(response => {
      const loginData = adaptLoginResponse(response);
      dispatch(ActionCreators.setUserData(loginData));
      dispatch(ActionCreators.requiredAuthorization(false));
    }),
  authorize: formData => (dispatch, _getState, api) => {
    return api.post(Constants.LOGIN_PATH, formData).then(response => {
      const loginData = adaptLoginResponse(response);
      dispatch(ActionCreators.setUserData(loginData));
      dispatch(ActionCreators.requiredAuthorization(false));
      history.push(`/`);
    });
  }
};

export default Operations;
