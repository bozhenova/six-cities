import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import HeaderWrapped from '../header';
import * as selectors from '../../redux/reducer/favorites/selectors';
import {
  Operations,
  ActionCreator
} from '../../redux/reducer/favorites/actions';
import FavoritesEmpty from '../favorites-empty';
import CardWrapped from '../card';
import offers from '../../mocks/offers';

class Favorites extends PureComponent {
  static propTypes = {
    favorites: PropTypes.array.isRequired,
    loadFavorites: PropTypes.func.isRequired,
    updateFavorites: PropTypes.func.isRequired
  };

  componentDidMount() {
    // this.props.loadFavorites();
  }

  // onToggleFavorite = id => {
  //   const offer = offers.filter(offer => offer.id === id);
  //   this.props.updateFavorites(offer);
  // };

  render() {
    const { favorites } = this.props;
    const favs = offers.filter(offer => offer.isFavorite);

    return (
      <div className='page'>
        <HeaderWrapped />
        {favorites.length ? (
          <FavoritesEmpty />
        ) : (
          <main className='page__main page__main--favorites'>
            <div className='page__favorites-container container'>
              <section className='favorites'>
                <h1 className='favorites__title'>Saved listing</h1>
                <ul className='favorites__list'>
                  <li className='favorites__locations-items'>
                    <div className='favorites__locations locations locations--current'>
                      <div className='locations__item'>
                        <a className='locations__item-link' href='#'>
                          <span>Amsterdam</span>
                        </a>
                      </div>
                    </div>
                    <div className='favorites__places'>
                      {favs.map(offer => (
                        <CardWrapped
                          key={offer.id}
                          mainClassMod={`favorites__card`}
                          classModPrefix={`favorites`}
                          offerDetails={offer}
                          // toggleFavorite={this.onToggleFavorite}
                        />
                      ))}
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </main>
        )}
        <footer className='footer container'>
          <Link className='footer__logo-link' to={'/'}>
            <img
              className='footer__logo'
              src='img/logo.svg'
              alt='6 cities logo'
              width='64'
              height='33'
            />
          </Link>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favorites: selectors.getFavorites(state)
});

const mapDispatchToProps = dispatch => ({
  loadFavorites: () => dispatch(Operations.loadFavorites()),
  updateFavorites: offer => dispatch(ActionCreator.updateFavorites(offer))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
