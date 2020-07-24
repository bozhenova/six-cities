import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './footer';

describe('Footer component renders correctly', () => {
  it('should render Footer', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
