import { ActionTypes as types } from '../../ActionTypes';
import { Constants } from '../../../constants';
import { adaptOffers } from '../../../adapter';
import { Operations as DataOperations } from '../data/actions';

export const ActionCreator = {
  loadFavorites: favorites => ({
    type: types.LOAD_FAVORITES,
    payload: favorites
  }),
  updateFavorites: offer => ({
    type: types.UPDATE_FAVORITES,
    payload: offer
  })
};

export const Operations = {
  loadFavorites: () => (dispatch, _getState, api) => {
    return api
      .get(Constants.FAVORITE_PATH)
      .then(response => adaptOffers(response))
      .then(data => dispatch(ActionCreator.loadFavorites(data)));
  },
  updateFavorites: (id, isFavorite) => (dispatch, _getState, api) => {
    return api
      .post(`${Constants.FAVORITE_PATH}/${id}/${+!isFavorite}`)
      .then(data => {
        dispatch(ActionCreator.updateFavorites(data));
      });
  }
};
