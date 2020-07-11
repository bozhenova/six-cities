import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import history from '../history';
import { ActionCreator } from '../redux/reducer/user/actions';
import * as selectors from '../redux/reducer/user/selectors';

const withLoginData = Component => {
  class WithLoginData extends PureComponent {
    onSignInClick = () => {
      this.props.requireAuthorization();
      history.push('/login');
    };

    render() {
      const { user } = this.props;

      return (
        <Component
          {...this.props}
          handleSignInClick={this.onSignInClick}
          user={user}
        />
      );
    }
  }

  return WithLoginData;
};

const mapStateToProps = state => ({
  user: selectors.getLoginData(state)
});

const mapDispatchToProps = dispatch => ({
  requireAuthorization: () =>
    dispatch(ActionCreator.requiredAuthorization(true))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLoginData
);
