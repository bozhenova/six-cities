import React from 'react';
import Card from './card';
import { shallow } from 'enzyme';

const mock = {
  offerDetails: {
    title: '',
    previewPhoto: '',
    isPremium: true,
    isFavorite: false,
    price: 136,
    type: '',
    rating: 88
  },
  onCardHover: jest.fn()
};

it('should dispatch a mouseenter function', () => {
  const { offerDetails, onCardHover } = mock;

  const wrapper = shallow(
    <Card offerDetails={offerDetails} onCardHover={onCardHover} />
  );

  expect(wrapper.find('.place-card').exists()).toBeTruthy();
  wrapper.find('.place-card').simulate('mouseenter');
  expect(onCardHover).toBeCalled();
});
