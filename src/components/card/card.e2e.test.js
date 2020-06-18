import React from 'react';
import Card from './card';
import { mount } from 'enzyme';

it('should dispatch a mouseenter function', () => {
  const props = {
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

  const wrapper = shallow(
    <Card offerDetails={props.offerDetails} onCardHover={props.onCardHover} />
  );

  expect(wrapper.find('.place-card').exists()).toBeTruthy();
  wrapper.find('.place-card').simulate('mouseenter');
  expect(props.onCardHover).toBeCalled();
});
