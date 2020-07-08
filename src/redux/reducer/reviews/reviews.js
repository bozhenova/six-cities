import { ActionTypes as types } from '../../ActionTypes';

const initialState = {
  reviews: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };
  }
  return state;
};
