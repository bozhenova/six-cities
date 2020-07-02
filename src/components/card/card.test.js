import React from 'react';
import Card from './card';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';

describe('Card', () => {
  const props = {
    offerDetails: {
      id: 33,
      title: '',
      previewPhoto: '',
      isPremium: true,
      isFavorite: false,
      price: 136,
      type: '',
      rating: 88
    },
    selectOffer: jest.fn(),
    classModPrefix: `cities`,
    mainClassMod: `cities__place-card`
  };

  it('should render a card', () => {
    const tree = renderer
      .create(
        <Router>
          <Card {...props} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
