import MockAdapter from 'axios-mock-adapter';

import configureAPI from '../../../services/api';
import { Operations } from './actions';
import { ActionTypes as types } from '../../ActionTypes';
import { Constants } from '../../../constants';
import { offersFromRequest } from '../../../mocks';
import { adaptOffers, adaptOffer } from '../../../adapter';

describe('Reducer works correctly', () => {
  it('Should make a correct API call to /hotels', () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const offersLoader = Operations.loadFavorites();

    apiMock
      .onGet(Constants.FAVORITE_PATH)
      .reply(Constants.STATUS_OK, offersFromRequest);

    return offersLoader(dispatch, jest.fn(), api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: types.LOAD_FAVORITES,
        payload: adaptOffers(offersFromRequest)
      });
    });
  });
  it('Should make a correct API call POST to /hotels/id/1', () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const id = 1;
    const isFavorite = false;
    const offersUpdate = Operations.updateFavorites(id, isFavorite);

    apiMock
      .onPost(`${Constants.FAVORITE_PATH}/${id}/${+!isFavorite}`)
      .reply(Constants.STATUS_OK, offersFromRequest[0]);

    return offersUpdate(dispatch, jest.fn(), api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: types.UPDATE_FAVORITES,
        payload: adaptOffer(offersFromRequest[0])
      });
    });
  });
});
