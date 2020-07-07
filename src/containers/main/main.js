import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderWrapped from '../../components/header/header';
import MainEmpty from '../../components/main-empty/main-empty';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import CitiesList from '../../components/cities-list/cities-list';
import Select from '../../components/select/select';
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
    const { currentCity, offers, match } = this.props;

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
                  <Select handleSelectChange={this.onSelectChange} />
                  <OffersList
                    match={match}
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
  currentCity: state.data.currentCity,
  currentOfferId: state.data.currentOfferId,
  offers: state.data.filteredOffers
});

const mapDispatchToProps = dispatch => ({
  setSortType: type => dispatch(ActionCreators.setSortType(type)),
  requireAuthorization: () =>
    dispatch(ActionCreators.requiredAuthorization(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
