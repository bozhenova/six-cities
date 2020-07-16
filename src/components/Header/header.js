import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import history from '../../history';
import { Constants, KeyCodes } from '../../constants';
import { getLoginData } from '../../redux/reducer/user/selectors';
import { ActionCreator } from '../../redux/reducer/user/actions';

const Header = () => {
  const user = useSelector(getLoginData);
  const dispatch = useDispatch();

  const onSignInClick = () => {
    dispatch(ActionCreator.requiredAuthorization(true));
    history.push('/login');
  };

  const onKeyPress = e => {
    if (e.key === KeyCodes.ENTER) {
      dispatch(ActionCreator.requiredAuthorization(true));
      history.push('/login');
    }
  };

  const isSignedIn = user.email ? (
    <span className='header__user-name user__name'>{user.email}</span>
  ) : (
    <span
      className='header__login'
      onClick={onSignInClick}
      tabIndex={0}
      onKeyPress={onKeyPress}
    >
      Sign in
    </span>
  );

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Link
              to={'/'}
              className='header__logo-link header__logo-link--active'
            >
              <img
                className='header__logo'
                src='/img/logo.svg'
                alt='6 cities logo'
                width='81'
                height='41'
              />
            </Link>
          </div>
          <nav className='header__nav'>
            <ul className='header__nav-list'>
              <li className='header__nav-item user'>
                <Link
                  to={user.email ? `/favorites` : `/login`}
                  className='header__nav-link header__nav-link--profile'
                >
                  <div
                    className='header__avatar-wrapper user__avatar-wrapper'
                    style={
                      user.avatarUrl && {
                        backgroundImage: `url(${Constants.BASE_URL}${user.avatarUrl})`
                      }
                    }
                  />
                  {isSignedIn}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
