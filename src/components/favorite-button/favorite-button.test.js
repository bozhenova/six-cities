import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import FavoriteButton from './favorite-button';
import renderer from 'react-test-renderer';
import rootReducer from '../../redux/reducer';

describe('Favorite Button component renders correctly', () => {
  it('should render a favorite button', () => {
    const props = {
      id: 42,
      isFavorite: false,
      prefixClass: 'place-card',
      width: 18,
      height: 19,
      match: {}
    };

    const store = createStore(rootReducer);
    const tree = renderer
      .create(
        <Provider store={store}>
          <FavoriteButton {...props} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
