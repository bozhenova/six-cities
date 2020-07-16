import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../header/';
import { Constants } from '../../constants';
import { Operations } from '../../redux/reducer/user/actions';
import { getCurrentCity } from '../../redux/reducer/data/selectors';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(Operations.authorize({ email, password }));
  };

  const city = useSelector(getCurrentCity);

  return (
    <div className='page page--gray page--login'>
      <Header />
      <main className='page__main page__main--login'>
        <div className='page__login-container container'>
          <section className='login'>
            <h1 className='login__title'>Sign in</h1>
            <form
              className='login__form form'
              action='#'
              method='post'
              onSubmit={handleFormSubmit}
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
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>Password</label>
                <input
                  className='login__input form__input'
                  type='password'
                  name='password'
                  placeholder='Password'
                  onChange={handlePasswordChange}
                  required=''
                  autoComplete={'current-password'}
                  minLength={Constants.MIN_PASSWORD_LENGTH}
                  value={password}
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

export default SignIn;
