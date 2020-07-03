import React from 'react';
import City from './city';
import { mount } from 'enzyme';

describe('City component works correctly', () => {
  it('should dispatch a click function', () => {
    const changeCity = jest.fn();

    const wrapper = mount(
      <City
        city={'Amsterdam'}
        changeCity={changeCity}
        currentCity={'Amsterdam'}
      />
    );
    expect(wrapper.find('.locations__item-link').exists()).toBeTruthy();
    wrapper.find('.locations__item-link').simulate('click');
    expect(changeCity).toBeCalled();
  });
});
