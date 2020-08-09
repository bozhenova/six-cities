import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './footer';
import history from '../../history';
import { Router } from 'react-router-dom';

describe('Footer component renders correctly', () => {
  it('should render Footer', () => {
    const tree = renderer
      .create(
        <Router history={history}>
          <Footer />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
