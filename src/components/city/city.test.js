import React from 'react';
import City from './city';
import renderer from 'react-test-renderer';

describe('City component renders correctly', () => {
  const props = {
    key: 42,
    city: 'Amsterdam',
    changeCity: jest.fn(),
    currentCity: 'Amsterdam'
  };

  it('should render a City component', () => {
    const tree = renderer.create(<City {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
