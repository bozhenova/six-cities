import { ActionTypes as types } from '../../ActionTypes';
import { Constants } from '../../../constants';
import { adaptOffers } from '../../../adapter';

export const ActionCreators = {
  setCity: city => ({
    type: types.SET_CITY,
    payload: city
  }),
  setCurrentOffer: id => ({
    type: types.SET_CURRENT_OFFER,
    payload: id
  }),
  setSortType: type => ({
    type: types.SET_SORT_TYPE,
    payload: type
  }),
  loadOffers: offers => ({
    type: types.LOAD_OFFERS,
    payload: offers
  }),
  loadNearbyOffers: offers => ({
    type: types.LOAD_NEARBY_OFFERS,
    payload: offers
  })
};

export const Operations = {
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
  }
};
