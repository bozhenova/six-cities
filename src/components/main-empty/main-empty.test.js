import React from 'react';
import renderer from 'react-test-renderer';

import MainEmpty from './main-empty';

describe('MaiEmpty component renders correctly', () => {
  it('should render an empty main component', () => {
    const tree = renderer
      .create(<MainEmpty currentCity='Amsterdam' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
