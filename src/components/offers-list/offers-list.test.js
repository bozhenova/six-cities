import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import OffersList from './offers-list';
import rootReducer from '../../redux/reducer';
import history from '../../history';

describe('Offers List component renders correctly', () => {
  const props = {
    classModOffers: [`cities__places-list`, `tabs__content`],
    classModPrefix: `cities`,
    mainClassMod: `cities__place-card`,
    offers: [
      {
        id: 42334224,
        city: `Amsterdam`,
        title: `Wood and stone place`,
        previewPhoto: `img/room.jpg`,
        isPremium: false,
        isFavorite: true,
        price: 80,
        type: `Private room`,
        rating: 80,
        coordinates: [52.369553943508, 4.85309666406198]
      },
      {
        id: 4233924,
        city: `Brussels`,
        title: `Canal View Prinsengracht`,
        previewPhoto: `img/apartment-02.jpg`,
        isPremium: false,
        isFavorite: false,
        price: 132,
        type: `Apartment`,
        rating: 80,
        coordinates: [52.3909553943508, 4.929309666406198]
      }
    ]
  };

  it('should render a list of offers', () => {
    const store = createStore(rootReducer);
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router history={history}>
            <OffersList {...props} />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
