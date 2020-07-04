import React from 'react';
import { ReviewsList } from './reviews-list';
import renderer from 'react-test-renderer';

describe('Reviews List', () => {
  it('should render a list of reviews', () => {
    const tree = renderer.create(<ReviewsList reviews={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
