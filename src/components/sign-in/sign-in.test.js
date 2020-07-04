import React from 'react';
import SignIn from './sign-in';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';

describe('Sign In', () => {
  it('should render a sign in component', () => {
    const tree = renderer
      .create(
        <Router>
          <SignIn />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
