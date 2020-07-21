import React from 'react';
import ReviewsList from './reviews-list';
import renderer from 'react-test-renderer';

describe('Reviews List component render correctly', () => {
  it('should render Reviews List', () => {
    const tree = renderer.create(<ReviewsList reviews={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
