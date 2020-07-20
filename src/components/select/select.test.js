import React from 'react';
import renderer from 'react-test-renderer';
import Select from './select';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../redux/reducer';

it(`Should render SortingOptions component correctly`, () => {
  const store = createStore(rootReducer);
  const tree = renderer
    .create(
      <Provider store={store}>
        <Select handleSelectChange={jest.fn()} />
      </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
