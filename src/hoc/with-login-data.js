import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { ActionCreators } from '../redux/reducer/user/actions';

const withLoginData = Component => {
  class WithLoginData extends React.PureComponent {
    onSignInClick = e => {
      e.preventDefault();
      this.props.requireAuthorization();
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
  user: state.user.loginData
});

const mapDispatchToProps = dispatch => ({
  requireAuthorization: () =>
    dispatch(ActionCreators.requiredAuthorization(true))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLoginData
);
