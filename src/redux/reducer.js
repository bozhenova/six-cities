import { ActionType as types } from './actions';
import offers from '../mocks/offers';

const initialState = {
  city: 'Amsterdam',
  offers: [...offers]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_CITY:
      return { ...state, city: action.payload.city };
    case types.FETCH_OFFERS:
      return { ...state, offers: action.payload.offers };
  }
  return state;
};

export default reducer;
