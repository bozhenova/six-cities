import React from 'react';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Option from './option';
import rootReducer from '../../redux/reducer';

describe('Option component renders correctly', () => {
  const props = {
    onSelectOption: jest.fn(),
    isSelected: false,
    sortType: '',
    name: ''
  };

  it('should render an option', () => {
    const store = createStore(rootReducer);
    const tree = renderer
      .create(
        <Provider store={store}>
          <Option {...props} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
