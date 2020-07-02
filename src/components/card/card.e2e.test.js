import React from 'react';
import Card from './card';
import { mount } from 'enzyme';
import { HashRouter as Router } from 'react-router-dom';

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
  selectOffer: jest.fn()
};
describe('Card component works correctly', () => {
  it('should dispatch a mouseenter function', () => {
    const { offerDetails, selectOffer } = mock;

    const wrapper = mount(
      <Router>
        <Card
          offerDetails={offerDetails}
          classModPrefix={`cities`}
          mainClassMod={`cities__place-card`}
          key={offerDetails.id}
          selectOffer={selectOffer}
        />
      </Router>
    );
    expect(wrapper.find('.place-card__image-wrapper').exists()).toBeTruthy();
    wrapper.find('.place-card__image-wrapper').simulate('mouseenter');
    expect(selectOffer).toBeCalled();
  });
});
