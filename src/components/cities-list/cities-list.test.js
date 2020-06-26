import React from 'react';
import { shallow } from 'enzyme';
import Cities from './cities-list.js';

const cities = ['Amsterdam', 'Paris', 'Cologne', 'Hamburg', 'Dusseldorf'];

it('should render cities correctly', () => {
  const cities = shallow(<Cities cities={cities} onChangeCity={jest.fn} />);
  expect(cities).toMatchSnapshot();
});
