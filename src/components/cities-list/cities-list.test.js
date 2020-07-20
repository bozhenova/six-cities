import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import rootReducer from '../../redux/reducer';
import CitiesList from './cities-list.js';

it('should render cities correctly', () => {
  const store = createStore(rootReducer);
  const tree = renderer
    .create(
      <Provider store={store}>
        <CitiesList />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
