import React from 'react';
import Map from './map';
import renderer from 'react-test-renderer';

const createMapBlock = () => {
  const div = global.document.createElement(`div`);
  div.setAttribute(`id`, `map`);
  global.document.body.appendChild(div);
};

describe('Map', () => {
  it('should render a map', () => {
    createMapBlock();
    const coordinates = [[52.3809553943508, 4.939309666406198]];
    const map = renderer
      .create(<Map currentCity={`Amsterdam`} coordinates={coordinates} />)
      .toJSON();
    expect(map).toMatchSnapshot();
  });
});
