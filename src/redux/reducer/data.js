import { ActionTypes as types } from '../ActionTypes';
import getSortedOffers from '../selectors/get-sorted-offers';

const initialState = {
  currentCity: '',
  cities: [],
  offers: [],
  filteredOffers: [],
  nearbyOffers: [],
  reviews: [],
  currentOfferId: null,
  sortType: 'popular'
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CITY:
      return {
        ...state,
        currentCity: action.payload,
        filteredOffers: getSortedOffers(
          state.offers,
          action.payload,
          state.sortType
        )
      };
    case types.SET_CURRENT_OFFER:
      return { ...state, currentOfferId: action.payload };
    case types.SET_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
        filteredOffers: getSortedOffers(
          state.offers,
          state.currentCity,
          action.payload
        )
      };
    case types.LOAD_OFFERS:
      return {
        ...state,
        cities: [...new Set(action.payload.map(it => it.city.name))],
        currentCity: action.payload[0].city.name,
        offers: action.payload,
        filteredOffers: getSortedOffers(
          action.payload,
          action.payload[0].city.name,
          state.sortType
        )
      };
    case types.LOAD_NEARBY_OFFERS:
      return {
        ...state,
        nearbyOffers: action.payload
      };
    case types.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };
  }
  return state;
};
