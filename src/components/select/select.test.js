import React from 'react';
import renderer from 'react-test-renderer';
import Select from './select';

it(`Should render SortingOptions component correctly`, () => {
  const tree = renderer
    .create(<Select handleSelectChange={jest.fn()} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
