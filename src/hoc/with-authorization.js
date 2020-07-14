import * as React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { Operations } from '../redux/reducer/user/actions';
import { getCurrentCity } from '../redux/reducer/data/selectors';
import { getAuthorizationStatus } from '../redux/reducer/user/selectors';

const withAuthorization = Component => {
  class WithAuthorization extends React.PureComponent {
    state = {
      email: '',
      password: ''
    };

    handleEmailChange = e => {
      this.setState({
        email: e.target.value
      });
    };

    handlePasswordChange = e => {
      this.setState({
        password: e.target.value
      });
    };

    handleFormSubmit = () => {
      this.props.authorize(this.state);
    };

    render() {
      const { email, password } = this.state;
      const { city, isAuthRequired } = this.props;

      return (
        <Component
          {...this.props}
          onEmailChange={this.handleEmailChange}
          onPasswordChange={this.handlePasswordChange}
          onFormSubmit={this.handleFormSubmit}
          emailValue={email}
          isAuthRequired={isAuthRequired}
          passwordValue={password}
          city={city}
        />
      );
    }
  }

  return WithAuthorization;
};

const mapStatetoProps = state => ({
  city: getCurrentCity(state),
  isAuthRequired: getAuthorizationStatus(state)
});

const mapDispatchToProps = dispatch => ({
  authorize: formData => dispatch(Operations.authorize(formData))
});

export default compose(
  connect(mapStatetoProps, mapDispatchToProps),
  withAuthorization
);
