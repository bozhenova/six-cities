import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import rootReducer from '../../redux/reducer';
import history from '../../history';
import CardWrapped from './card';

const mock = {
  offerDetails: {
    title: '',
    previewPhoto: '',
    isPremium: true,
    isFavorite: false,
    price: 136,
    type: '',
    id: 42,
    rating: 88
  },
  selectOffer: jest.fn(),
  classModPrefix: `cities`,
  mainClassMod: `cities__place-card`,
  match: {}
};
describe('Card component works correctly', () => {
  it('should dispatch a mouseenter function', () => {
    const store = createStore(rootReducer);
    const { offerDetails, selectOffer } = mock;

    const wrapper = mount(
      <Provider store={store}>
        <Router history={history}>
          <CardWrapped
            offerDetails={offerDetails}
            classModPrefix={`cities`}
            mainClassMod={`cities__place-card`}
            key={offerDetails.id}
            selectOffer={selectOffer}
          />
        </Router>
      </Provider>
    );
    expect(wrapper.find('.place-card__image-wrapper').exists()).toBeTruthy();
    wrapper.find('.place-card__image-wrapper').simulate('mouseenter');
    expect(selectOffer).toBeCalled();
  });
});
