import { ActionTypes as types } from '../../ActionTypes';

const initialState = {
  favorites: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_FAVORITES:
      return { ...state, favorites: action.payload };
    case types.UPDATE_FAVORITES:
      const { id } = action.payload;
      return {
        ...state,
        favorites: [
          ...state.favorites.slice(0, id),
          action.payload,
          ...state.favorites.slice(id + 1)
        ]
      };
  }
  return state;
};
