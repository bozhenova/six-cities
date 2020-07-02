import React from 'react';
import renderer from 'react-test-renderer';
import { CitiesList } from './cities-list.js';

const citiesArr = ['Amsterdam', 'Paris', 'Cologne', 'Hamburg', 'Dusseldorf'];

it('should render cities correctly', () => {
  const tree = renderer
    .create(
      <CitiesList
        cities={citiesArr}
        currentCity={'Amsterdam'}
        changeCurrentCity={jest.fn()}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
