import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import history from '../../history';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { groupFavoritesByCities } from '../../redux/reducer/favorites/selectors';
import { Operations } from '../../redux/reducer/favorites/actions';
import { ActionCreator } from '../../redux/reducer/data/actions';
import FavoritesEmpty from '../../components/favorites-empty';
import CardWrapped from '../../components/card';

class Favorites extends PureComponent {
  static propTypes = {
    favorites: PropTypes.object,
    cities: PropTypes.array,
    loadFavorites: PropTypes.func.isRequired,
    changeCurrentCity: PropTypes.func.isRequired,
    updateFavorites: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadFavorites();
  }

  onCityClick = e => {
    e.preventDefault();
    const { changeCurrentCity } = this.props;
    const city = e.currentTarget.getAttribute(`data-city`);

    changeCurrentCity(city);
    history.push('/');
  };

  render() {
    const { favorites, cities } = this.props;

    return (
      <div className='page'>
        <Header />
        {!cities.length ? (
          <FavoritesEmpty />
        ) : (
          <main className='page__main page__main--favorites'>
            <div className='page__favorites-container container'>
              <section className='favorites'>
                <h1 className='favorites__title'>Saved listing</h1>
                <ul className='favorites__list'>
                  {cities.map(city => {
                    return (
                      <li key={city} className='favorites__locations-items'>
                        <div className='favorites__locations locations locations--current'>
                          <div className='locations__item'>
                            <button
                              type='button'
                              data-city={city}
                              onClick={this.onCityClick}
                              className='locations__item-link'
                            >
                              <span>{city}</span>
                            </button>
                          </div>
                        </div>
                        <div className='favorites__places'>
                          {favorites[city].map(offer => (
                            <CardWrapped
                              key={offer.id}
                              mainClassMod={`favorites__card`}
                              classModPrefix={`favorites`}
                              offerDetails={offer}
                            />
                          ))}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
          </main>
        )}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const favorites = groupFavoritesByCities(state);

  return {
    cities: Object.keys(favorites),
    favorites: favorites
  };
};

const mapDispatchToProps = dispatch => ({
  loadFavorites: () => dispatch(Operations.loadFavorites()),
  updateFavorites: offer => dispatch(Operations.updateFavorites(offer)),
  changeCurrentCity: city => dispatch(ActionCreator.setCity(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
