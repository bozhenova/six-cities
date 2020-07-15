import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import history from '../history';
import { ActionCreator } from '../redux/reducer/user/actions';
import { getLoginData } from '../redux/reducer/user/selectors';
import { KeyCodes } from '../constants';

const withLoginData = Component => {
  class WithLoginData extends PureComponent {
    onSignInClick = () => {
      this.props.requireAuthorization();
      history.push('/login');
    };

    onKeyPress = e => {
      if (e.key === KeyCodes.ENTER) {
        this.props.requireAuthorization();
        history.push('/login');
      }
    };

    render() {
      const { user } = this.props;

      return (
        <Component
          {...this.props}
          handleSignInClick={this.onSignInClick}
          handleKeyPress={this.onKeyPress}
          user={user}
        />
      );
    }
  }

  return WithLoginData;
};

const mapStateToProps = state => ({
  user: getLoginData(state)
});

const mapDispatchToProps = dispatch => ({
  requireAuthorization: () =>
    dispatch(ActionCreator.requiredAuthorization(true))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLoginData
);
