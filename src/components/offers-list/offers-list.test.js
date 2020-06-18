import React from 'react';
import OffersList from './offers-list';
import renderer from 'react-test-renderer';

describe('Offers List', () => {
  const props = {
    handleCardHover: () => {},
    offers: [
      {
        title: '',
        previewPhoto: '',
        isPremium: true,
        isFavorite: true,
        price: 116,
        type: '',
        rating: 80
      },
      {
        title: '',
        previewPhoto: '',
        isPremium: true,
        isFavorite: false,
        price: 136,
        type: '',
        rating: 88
      }
    ]
  };

  it('should render a list of offers', () => {
    const tree = renderer.create(<OffersList {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
