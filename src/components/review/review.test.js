import React from 'react';
import Review from './review';
import renderer from 'react-test-renderer';

const props = {
  comment: '',
  date: '',
  rating: 5,
  user: {
    avatarUrl: '',
    isPro: true,
    name: ''
  }
};

describe('Review component renders correctly', () => {
  it('should render Review', () => {
    const review = renderer.create(<Review review={props} />).toJSON();
    expect(review).toMatchSnapshot();
  });
});
