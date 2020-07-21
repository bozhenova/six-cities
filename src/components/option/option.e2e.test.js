import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../../redux/reducer';
import Option from './option';

describe('Option component works correctly', () => {
  const props = {
    isSelected: false,
    sortType: '',
    name: ''
  };
  it('should dispatch a click function', () => {
    const store = createStore(rootReducer);
    const onSelectOption = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <Option onSelectOption={onSelectOption} {...props} />
      </Provider>
    );
    expect(wrapper.find('.places__option').exists()).toBeTruthy();
    wrapper.find('.places__option').simulate('click');
    expect(onSelectOption).toBeCalled();
  });
});
