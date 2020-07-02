import React from 'react';
import { OffersList } from './offers-list';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';

describe('Offers List', () => {
  const props = {
    classModOffers: [`cities__places-list`, `tabs__content`],
    setCurrentOffer: jest.fn(),
    offers: [
      {
        id: 42334224,
        city: `Amsterdam`,
        title: `Wood and stone place`,
        previewPhoto: `img/room.jpg`,
        isPremium: false,
        isFavorite: true,
        price: 80,
        type: `Private room`,
        rating: 80,
        coordinates: [52.369553943508, 4.85309666406198]
      },
      {
        id: 4233924,
        city: `Brussels`,
        title: `Canal View Prinsengracht`,
        previewPhoto: `img/apartment-02.jpg`,
        isPremium: false,
        isFavorite: false,
        price: 132,
        type: `Apartment`,
        rating: 80,
        coordinates: [52.3909553943508, 4.929309666406198]
      }
    ]
  };

  it('should render a list of offers', () => {
    const tree = renderer
      .create(
        <Router>
          <OffersList {...props} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
