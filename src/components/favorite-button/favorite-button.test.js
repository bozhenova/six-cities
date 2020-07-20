import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import FavoriteButton from './favorite-button';
import renderer from 'react-test-renderer';
import rootReducer from '../../redux/reducer';

describe('Favorite Button', () => {
  it('should render a favorite button', () => {
    const store = createStore(rootReducer);
    const tree = renderer
      .create(
        <Provider store={store}>
          <FavoriteButton />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
