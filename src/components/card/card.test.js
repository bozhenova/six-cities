import React from 'react';
import Card from './card';
import renderer from 'react-test-renderer';

describe('Card', () => {
  const props = {
    offerDetails: {
      title: '',
      previewPhoto: '',
      isPremium: true,
      isFavorite: false,
      price: 136,
      type: '',
      rating: 88
    },
    onCardHover: () => {}
  };

  it('should render a card', () => {
    const tree = renderer.create(<Card {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
