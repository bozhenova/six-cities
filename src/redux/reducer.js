import { ActionType as types } from './actions';
import offers from '../mocks/offers';

const initialState = {
  city: 'Amsterdam',
  offers: [...offers],
  currentOfferId: null,
  sortType: 'popular',
  reviews: {},
  favorites: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CITY:
      return { ...state, city: action.payload };
    case types.SET_CURRENT_OFFER:
      return { ...state, currentOfferId: action.payload };
    case types.SET_SORT_TYPE:
      return { ...state, sortType: action.payload };
  }
  return state;
};

export default reducer;
