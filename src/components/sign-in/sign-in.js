import React from 'react';
import PropTypes from 'prop-types';
import HeaderWrapped from '../header/header';
import withAuthorization from '../../hoc/with-authorization';
import { Constants } from '../../constants';

const SignIn = props => {
  const handleSubmit = e => {
    e.preventDefault();
    const { onFormSubmit } = props;
    onFormSubmit();
  };

  const {
    onEmailChange,
    onPasswordChange,
    emailValue,
    passwordValue,
    city
  } = props;
  return (
    <div className='page page--gray page--login'>
      <HeaderWrapped />
      <main className='page__main page__main--login'>
        <div className='page__login-container container'>
          <section className='login'>
            <h1 className='login__title'>Sign in</h1>
            <form
              className='login__form form'
              action='#'
              method='post'
              onSubmit={handleSubmit}
            >
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>E-mail</label>
                <input
                  className='login__input form__input'
                  type='email'
                  name='email'
                  placeholder='Email'
                  required=''
                  autoComplete={'username'}
                  value={emailValue}
                  onChange={onEmailChange}
                />
              </div>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>Password</label>
                <input
                  className='login__input form__input'
                  type='password'
                  name='password'
                  placeholder='Password'
                  onChange={onPasswordChange}
                  required=''
                  autoComplete={'current-password'}
                  minLength={Constants.MIN_PASSWORD_LENGTH}
                  value={passwordValue}
                />
              </div>
              <button
                className='login__submit form__submit button'
                type='submit'
              >
                Sign in
              </button>
            </form>
          </section>
          <section className='locations locations--login locations--current'>
            <div className='locations__item'>
              <a className='locations__item-link' href='#'>
                <span>{city}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

SignIn.propTypes = {
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired
};
export { SignIn };

const SignInWrapped = withAuthorization(SignIn);
export default SignInWrapped;
