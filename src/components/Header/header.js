import React from 'react';
import { Link } from 'react-router-dom';
import withLoginData from '../../hoc/with-login-data';
import { Constants } from '../../constants';

const Header = ({ user, handleSignInClick, handleKeyPress }) => {
  const isSignedIn = user.email ? (
    <span className='header__user-name user__name'>{user.email}</span>
  ) : (
    <span
      className='header__login'
      onClick={handleSignInClick}
      tabIndex={0}
      onKeyPress={handleKeyPress}
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
export { Header };
const HeaderWrapped = withLoginData(Header);
export default HeaderWrapped;
