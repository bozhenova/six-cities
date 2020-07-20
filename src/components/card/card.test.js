import React from 'react';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import CardWrapped from './card';
import history from '../../history';
import rootReducer from '../../redux/reducer';

describe('Card', () => {
  const props = {
    offerDetails: {
      id: 33,
      title: '',
      previewPhoto: '',
      isPremium: true,
      isFavorite: false,
      price: 136,
      type: '',
      rating: 88
    },
    selectOffer: jest.fn(),
    classModPrefix: `cities`,
    mainClassMod: `cities__place-card`,
    match: {}
  };

  it('should render a card', () => {
    const store = createStore(rootReducer);
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router history={history}>
            <CardWrapped {...props} />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
