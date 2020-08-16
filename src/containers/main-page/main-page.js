import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getCurrentCity,
  getSortedOffers
} from '../../redux/reducer/data/selectors';
import { Operations } from '../../redux/reducer/data/actions';
import Map from '../../components/map';
import Header from '../../components/header';
import MainEmpty from '../../components/main-empty';
import Select from '../../components/select';
import OffersList from '../../components/offers-list';
import CitiesList from '../../components/cities-list';

class Main extends PureComponent {
  static propTypes = {
    offers: PropTypes.array.isRequired,
    currentCity: PropTypes.string.isRequired
  };

  componentDidMount() {
    this.props.loadOffers();
  }

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
                  <Select />
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
  offers: getSortedOffers(state)
});

const mapDispatchToProps = dispatch => ({
  loadOffers: () => dispatch(Operations.loadOffers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
