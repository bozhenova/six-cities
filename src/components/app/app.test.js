import React from 'react';
import App from './app';
import renderer from 'react-test-renderer';

describe('Main page', () => {
  const props = {
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

  it('should render a main page', () => {
    const tree = renderer.create(<App {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
