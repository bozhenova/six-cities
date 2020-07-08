import * as React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { Operations } from '../redux/reducer/user/actions';

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

      return (
        <Component
          {...this.props}
          onEmailChange={this.handleEmailChange}
          onPasswordChange={this.handlePasswordChange}
          onFormSubmit={this.handleFormSubmit}
          emailValue={email}
          passwordValue={password}
        />
      );
    }
  }

  return WithAuthorization;
};

const mapDispatchToProps = dispatch => ({
  authorize: formData => dispatch(Operations.authorize(formData))
});

export default compose(connect(null, mapDispatchToProps), withAuthorization);
