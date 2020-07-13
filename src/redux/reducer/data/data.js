import { ActionTypes as types } from '../../ActionTypes';

const initialState = {
  currentCity: '',
  offers: [],
  nearbyOffers: [],
  currentOfferId: null,
  sortType: 'popular'
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CITY:
      return {
        ...state,
        currentCity: action.payload
      };
    case types.SET_CURRENT_OFFER:
      return { ...state, currentOfferId: action.payload };
    case types.SET_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload
      };
    case types.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        currentCity: !state.currentCity
          ? action.payload[0].city.name
          : state.currentCity
      };
    case types.LOAD_NEARBY_OFFERS:
      return {
        ...state,
        nearbyOffers: action.payload
      };
  }
  return state;
};
