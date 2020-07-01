import { ActionTypes as types } from './ActionTypes';

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
  })
};
