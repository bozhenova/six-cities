import MockAdapter from 'axios-mock-adapter';

import { reducer } from './data';
import configureAPI from '../../../services/api';
import { Operations } from './actions';
import { ActionTypes as types } from '../../ActionTypes';
import { Constants } from '../../../constants';
import { offersFromRequest } from '../../../mocks';
import { adaptOffers } from '../../../adapter';

describe('Reducer works correctly', () => {
  it('Should return initial state by default', () => {
    expect(reducer(undefined, {})).toEqual({
      currentCity: '',
      offers: [],
      nearbyOffers: [],
      currentOfferId: null,
      sortType: 'popular'
    });
  });

  it('Should set a city', () => {
    expect(
      reducer(
        {
          currentCity: 'Cologne',
          offers: [],
          nearbyOffers: [],
          currentOfferId: null,
          sortType: 'popular'
        },
        { type: types.SET_CITY, payload: 'Amsterdam' }
      )
    ).toEqual({
      currentCity: 'Amsterdam',
      offers: [],
      nearbyOffers: [],
      currentOfferId: null,
      sortType: 'popular'
    });
  });

  it('Should set current offer', () => {
    expect(
      reducer(
        {
          currentCity: 'Cologne',
          offers: [],
          nearbyOffers: [],
          currentOfferId: null,
          sortType: 'popular'
        },
        { type: types.SET_CURRENT_OFFER, payload: 42 }
      )
    ).toEqual({
      currentCity: 'Cologne',
      offers: [],
      nearbyOffers: [],
      currentOfferId: 42,
      sortType: 'popular'
    });
  });

  it('Should set sort type', () => {
    expect(
      reducer(
        {
          currentCity: 'Cologne',
          offers: [],
          nearbyOffers: [],
          currentOfferId: null,
          sortType: 'popular'
        },
        { type: types.SET_SORT_TYPE, payload: 'to-low' }
      )
    ).toEqual({
      currentCity: 'Cologne',
      offers: [],
      nearbyOffers: [],
      currentOfferId: null,
      sortType: 'to-low'
    });
  });

  it('Should make a correct API call to /hotels', () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const offersLoader = Operations.loadOffers();

    apiMock
      .onGet(Constants.HOTEL_PATH)
      .reply(Constants.STATUS_OK, offersFromRequest);

    return offersLoader(dispatch, jest.fn(), api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: types.LOAD_OFFERS,
        payload: adaptOffers(offersFromRequest)
      });
    });
  });
  it('Should make a correct API call to /nearby', () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const id = 1;
    const nearbyOffersLoader = Operations.loadNearbyOffers(id);

    apiMock
      .onGet(`${Constants.HOTEL_PATH}/${id}${Constants.NEARBY_PATH}`)
      .reply(Constants.STATUS_OK, offersFromRequest);

    return nearbyOffersLoader(dispatch, jest.fn(), api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: types.LOAD_NEARBY_OFFERS,
        payload: adaptOffers(offersFromRequest)
      });
    });
  });
});
