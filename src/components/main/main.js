import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../header/header';
import MainEmpty from '../main-empty/main-empty';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import CitiesList from '../cities-list/cities-list';
import Select from '../select/select';
import { ActionCreators } from '../../redux/actions';

class Main extends Component {
  static propTypes = {
    offers: PropTypes.array.isRequired,
    currentCity: PropTypes.string.isRequired,
    currentOfferId: PropTypes.number,
    setSortType: PropTypes.func.isRequired
  };

  onSelectChange = e => {
    this.props.setSortType(e.target.value);
  };

  render() {
    const { currentCity, offers } = this.props;

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
                    <Map />
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
  currentCity: state.currentCity,
  currentOfferId: state.currentOfferId,
  offers: state.filteredOffers
});

const mapDispatchToProps = dispatch => ({
  setSortType: type => dispatch(ActionCreators.setSortType(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
