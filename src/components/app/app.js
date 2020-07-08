import React, { PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SignInWrapped from '../sign-in';
import Main from '../../containers/main';
import Favorites from '../favorites-page';
import OfferDetails from '../../containers/offer-details';
import { Operations } from '../../redux/reducer/user/actions';

class App extends PureComponent {
  static propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired,
    loadLoginData: PropTypes.func.isRequired
  };

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/login' component={SignInWrapped} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/offer/:id' component={OfferDetails} />
        <Redirect from='*' to='/' />
      </Switch>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthorizationRequired: state.user.isAuthorizationRequired
  };
};

const mapDispatchToProps = dispatch => ({
  loadLoginData: () => dispatch(Operations.loadLoginData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
