import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../header/header';
import MainEmpty from '../main-empty/main-empty';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import CitiesList from '../cities-list/cities-list';
import Select from '../select/select';
import getSortedOffers from '../../redux/selectors/get-sorted-offers';
import { ActionCreators } from '../../redux/actions';

class Main extends Component {
  static propTypes = {
    offers: PropTypes.array.isRequired,
    currentCity: PropTypes.string.isRequired,
    currentOfferId: PropTypes.number,
    setSortType: PropTypes.func.isRequired
  };

  getCurrentOffer = () => {
    const { currentOfferId, offers } = this.props;
    const currentOffer = offers.find(item => item.id === currentOfferId);
    return currentOffer
      ? [currentOffer.coordinates[0], currentOffer.coordinates[1]]
      : [0, 0];
  };

  onSelectChange = e => {
    this.props.setSortType(e.target.value);
  };

  render() {
    const { currentCity, offers } = this.props;
    const citiesCoordinates = offers.map(offer => offer.coordinates);

    return (
      <div className='page page--gray page--main'>
        <Header />
        <main className='page__main page__main--index'>
          <h1 className='visually-hidden'>Cities</h1>
          <div className='tabs'>
            <CitiesList />
          </div>
          <div className='cities'>
            {!offers.length ? (
              <MainEmpty currentCity={currentCity} />
            ) : (
              <div className='cities__places-container container'>
                <section className='cities__places places'>
                  <h2 className='visually-hidden'>Places</h2>
                  <b className='places__found'>
                    {offers.length} places to stay in {currentCity}
                  </b>
                  <Select handleSelectChange={this.onSelectChange} />
                  <OffersList
                    offers={offers}
                    classModOffers={[`cities__places-list`, `tabs__content`]}
                  />
                </section>
                <div className='cities__right-section'>
                  <section className='cities__map map'>
                    <Map
                      coordinates={citiesCoordinates}
                      currentCity={currentCity}
                      selectedOffer={this.getCurrentOffer()}
                    />
                  </section>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentCity: state.city,
  currentOfferId: state.currentOfferId,
  offers: getSortedOffers(state)
});

const mapDispatchToProps = dispatch => ({
  setSortType: type => dispatch(ActionCreators.setSortType(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
