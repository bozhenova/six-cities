import { reducer } from './data';
import configureAPI from '../../api';
import MockAdapter from 'axios-mock-adapter';
import Operations from '../../operations';
import { ActionTypes as types } from '../../ActionTypes';
import { Constants } from '../../../constants';

describe('Reducer works correctly', () => {
  it('Should return initial state by default', () => {
    expect(reducer(undefined, {})).toEqual({
      currentCity: '',
      cities: [],
      offers: [],
      filteredOffers: [],
      currentOfferId: null,
      sortType: 'popular'
    });
  });

  it('Should change city', () => {
    expect(
      reducer(
        {
          currentCity: 'Cologne',
          cities: [],
          offers: [],
          filteredOffers: [],
          currentOfferId: null,
          sortType: 'popular'
        },
        { type: types.SET_CITY, payload: 'Amsterdam' }
      )
    ).toEqual({
      currentCity: 'Amsterdam',
      cities: [],
      offers: [],
      filteredOffers: [],
      currentOfferId: null,
      sortType: 'popular'
    });
  });

  it('Should set current offer', () => {
    expect(
      reducer(
        {
          currentCity: 'Cologne',
          cities: [],
          offers: [],
          filteredOffers: [],
          currentOfferId: null,
          sortType: 'popular'
        },
        { type: types.SET_CURRENT_OFFER, payload: 42 }
      )
    ).toEqual({
      currentCity: 'Cologne',
      cities: [],
      offers: [],
      filteredOffers: [],
      currentOfferId: 42,
      sortType: 'popular'
    });
  });

  it('Should make a correct API call to /hotels', () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const offersLoader = Operations.loadOffers();

    apiMock
      .onGet(Constants.HOTEL_PATH)
      .reply(Constants.STATUS_OK, [{ fake: true }]);

    return offersLoader(dispatch, jest.fn(), api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: types.LOAD_OFFERS,
        payload: [{ fake: true }]
      });
    });
  });
});
