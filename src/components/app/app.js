import React, { PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Operations from '../../redux/operations';

import Main from '../../containers/main/';
import SignInWrapped from '../sign-in/sign-in';
import Favorites from '../favorites-page/favorites-page';
import OfferDetails from '../../containers/offer-details/';
import { Constants } from '../../constants';

class App extends PureComponent {
  static propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired,
    loadLoginData: PropTypes.func.isRequired
  };

  // componentDidMount() {
  //   const { loadLoginData } = this.props;
  //   loadLoginData();
  // }

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
