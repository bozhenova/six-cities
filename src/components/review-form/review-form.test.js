import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import ReviewForm from './review-form';
import rootReducer from '../../redux/reducer';

describe('Review Form component renders correctly', () => {
  it('should render Review Form', () => {
    const store = createStore(rootReducer);
    const tree = renderer
      .create(
        <Provider store={store}>
          <ReviewForm currentOfferId={42} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
