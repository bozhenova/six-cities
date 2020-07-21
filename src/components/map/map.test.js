import React from 'react';
import { Map } from './map';
import renderer from 'react-test-renderer';

const createMapBlock = () => {
  const div = global.document.createElement(`div`);
  div.setAttribute(`id`, `map`);
  global.document.body.appendChild(div);
};

const offers = [
  {
    city: {
      coords: [52.369553943508, 4.85309666406198],
      zoom: 12,
      name: 'Amsterdam'
    },
    place: {
      coords: [52.369553943508, 4.85309666406198],
      zoom: 12
    }
  }
];

const currentOfferCoords = [52.369553943508, 4.85309666406198];

describe('Map component renders correctly', () => {
  it('should render a map', () => {
    createMapBlock();
    const map = renderer
      .create(<Map offers={offers} currentOfferCoords={currentOfferCoords} />)
      .toJSON();
    expect(map).toMatchSnapshot();
  });
});
