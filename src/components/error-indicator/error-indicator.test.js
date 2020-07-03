import React from 'react';
import ErrorIndicator from './error-indicator';
import renderer from 'react-test-renderer';

describe('Error Indicator', () => {
  it('should render an error message', () => {
    const tree = renderer.create(<ErrorIndicator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
