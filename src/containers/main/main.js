import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getCurrentCity,
  getCurrentOfferId,
  getSortedOffers
} from '../../redux/reducer/data/selectors';
import HeaderWrapped from '../../components/header';
import MainEmpty from '../../components/main-empty';
import Map from '../../components/map';
import OffersList from '../../components/offers-list';
import CitiesList from '../../components/cities-list';
import SelectWrapped from '../../components/select';
import { ActionCreator as UserActions } from '../../redux/reducer/user/actions';

class Main extends Component {
  static propTypes = {
    offers: PropTypes.array.isRequired,
    currentCity: PropTypes.string.isRequired,
    currentOfferId: PropTypes.number
  };

  render() {
    const { currentCity, offers } = this.props;

    return (
      <div className='page page--gray page--main'>
        <HeaderWrapped />
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
                  <SelectWrapped />
                  <OffersList
                    offers={offers}
                    classModOffers={[`cities__places-list`, `tabs__content`]}
                    classModPrefix={`cities`}
                    mainClassMod={`cities__place-card`}
                  />
                </section>
                <div className='cities__right-section'>
                  <section className='cities__map map'>
                    <Map offers={offers} />
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
  currentCity: getCurrentCity(state),
  currentOfferId: getCurrentOfferId(state),
  offers: getSortedOffers(state)
});

const mapDispatchToProps = dispatch => ({
  requireAuthorization: () => dispatch(UserActions.requiredAuthorization(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
