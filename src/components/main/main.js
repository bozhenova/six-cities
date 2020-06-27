import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../header/header';

import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import CitiesList from '../cities-list/cities-list';

class Main extends Component {
  static propTypes = {
    offers: PropTypes.array.isRequired,
    currentCity: PropTypes.string.isRequired
  };

  getOffers = (offers, city) => {
    return offers.filter(offer => offer.city === city);
  };

  handleCardHover = () => {};

  render() {
    const { currentCity, offers } = this.props;
    const citiesCoordinates = offers.map(it => it.coordinates);

    return (
      <div className='page page--gray page--main'>
        <Header />
        <main className='page__main page__main--index'>
          <h1 className='visually-hidden'>Cities</h1>
          <div className='tabs'>
            <CitiesList currentCity={currentCity} />
          </div>
          <div className='cities'>
            <div className='cities__places-container container'>
              <section className='cities__places places'>
                <h2 className='visually-hidden'>Places</h2>
                <b className='places__found'>
                  {this.getOffers(offers, currentCity).length} places to stay in{' '}
                  {currentCity}
                </b>
                {this.getOffers(offers, currentCity).length}
                <form className='places__sorting' action='#' method='get'>
                  <span className='places__sorting-caption'>Sort by</span>
                  <span className='places__sorting-type' tabIndex='0'>
                    Popular
                    <svg className='places__sorting-arrow' width='7' height='4'>
                      <use xlinkHref='#icon-arrow-select' />
                    </svg>
                  </span>
                  <ul className='places__options places__options--custom places__options--opened'>
                    <li className='places__option' tabIndex='0'>
                      Popular
                    </li>
                    <li className='places__option' tabIndex='0'>
                      Price: low to high
                    </li>
                    <li className='places__option' tabIndex='0'>
                      Price: high to low
                    </li>
                    <li className='places__option' tabIndex='0'>
                      Top rated first
                    </li>
                  </ul>
                </form>
                <OffersList
                  handleCardHover={this.handleCardHover}
                  classModOffers={[`cities__places-list`, `tabs__content`]}
                />
              </section>
              <div className='cities__right-section'>
                <section className='cities__map map'>
                  <Map
                    coordinates={citiesCoordinates}
                    currentCity={currentCity}
                  />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentCity: state.city,
  offers: state.offers
});

export default connect(mapStateToProps)(Main);
