import { ActionCreators } from './actions';
import { Constants } from '../constants';
import { adaptOffers, adaptComments, adaptLoginResponse } from '../adapter';

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
  authorize: (email, password) => (dispatch, _getState, api) => {
    return api
      .post(Constants.LOGIN_PATH, { email, password })
      .then(({ status, response }) => {
        if (status === Constants.STATUS_OK) {
          dispatch(ActionCreators.requiredAuthorization(false));
          dispatch(ActionCreators.setError(``));
          adaptLoginResponse(response);
        }
      })
      .then(data => dispatch(ActionCreators.setUserData(data)))
      .catch(() => dispatch(ActionCreators.setError(`Check login data`)));
  }
};

export default Operations;
