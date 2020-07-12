import React, { PureComponent, Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Operations } from '../../redux/reducer/user/actions';
import * as selectors from '../../redux/reducer/user/selectors';
import Spinner from '../spinner';
import OfferDetails from '../../containers/offer-details';
const Main = lazy(() => import('../../containers/main'));
const SignInWrapped = lazy(() => import('../sign-in'));
const Favorites = lazy(() => import('../../containers/favorites-page'));
// const OfferDetails = lazy(() => import('../../containers/offer-details'));

class App extends PureComponent {
  static propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired,
    loadLoginData: PropTypes.func.isRequired
  };

  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/login' component={SignInWrapped} />
          <Route path='/favorites' component={Favorites} />
          <Route path='/offer/:id' component={OfferDetails} />
          <Redirect from='*' to='/' />
        </Switch>
      </Suspense>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthorizationRequired: selectors.getAuthorizationStatus(state)
  };
};

const mapDispatchToProps = dispatch => ({
  loadLoginData: () => dispatch(Operations.loadLoginData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
