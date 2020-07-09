import { ActionTypes as types } from '../../ActionTypes';
import { Constants } from '../../../constants';
import { adaptOffers } from '../../../adapter';

export const ActionCreators = {
  loadFavorites: favorites => ({
    type: types.LOAD_FAVORITES,
    payload: favorites
  }),
  updateFavorites: offer => ({
    type: types.UPDATE_FAVORITES,
    payload: offer
  }),
  toggleFavorite: offer => ({
    type: ActionType.TOGGLE_FAVORITE,
    payload: offer
  })
};

export const Operations = {
  loadFavorites: () => (dispatch, _getState, api) => {
    return api
      .get(Constants.FAVORITE_PATH)
      .then(response => adaptOffers(response))
      .then(data => dispatch(ActionCreators.loadFavorites(data)));
  },
  updateFavorites: offer => (dispatch, _getState, api) => {
    return api
      .post(Constants.FAVORITE_PATH, offer)
      .then(response => adaptOffers(response))
      .then(data => dispatch(ActionCreators.updateFavorites(data)));
  },
  toggleFavorite: (id, isFavorite) => (dispatch, _getState, api) => {
    return api
      .post(`${Constants.FAVORITE_PATH}/${id}/${isFavorite ? 0 : 1}`)
      .then(response => {
        dispatch(ActionCreators.toggleFavorite(response));
        dispatch(Operations.loadFavorites());
      });
  }
};
