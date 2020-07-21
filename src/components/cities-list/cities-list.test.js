import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import rootReducer from '../../redux/reducer';
import CitiesList from './cities-list.js';

describe('Cities List component renders correctly', () => {
  it('should render a cities list', () => {
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
});
