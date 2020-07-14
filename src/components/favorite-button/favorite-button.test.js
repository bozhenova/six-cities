import React from 'react';
import { FavoriteButton } from './favorite-button';
import renderer from 'react-test-renderer';

describe('Favorite Button', () => {
  it('should render a favorite button', () => {
    const tree = renderer.create(<FavoriteButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
