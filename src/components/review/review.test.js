import React from 'react';
import Review from './review';
import renderer from 'react-test-renderer';

const props = {
  id: `0`,
  comment: ``,
  date: ``,
  machineDate: ``,
  rating: 0,
  name: ``,
  avatar: ``,
  isPro: false
};

describe('Review', () => {
  it('should render a review correctly', () => {
    const review = renderer.create(<Review {...props} />).toJSON();
    expect(review).toMatchSnapshot();
  });
});
