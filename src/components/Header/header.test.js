import React from 'react';
import Header from './header';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';

describe('Header', () => {
  it('should render a header', () => {
    const tree = renderer
      .create(
        <Router>
          <Header />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
