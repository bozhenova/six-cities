import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ActionCreators } from '../../redux/actions';
import City from '../city/city';
const shortid = require('shortid');

class CitiesList extends Component {
  changeCity = city => {
    this.props.changeCurrentCity(city);
  };

  render() {
    const { cities, currentCity } = this.props;
    return (
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {cities.map(city => (
            <City
              key={shortid.generate()}
              city={city}
              changeCity={this.changeCity}
              currentCity={currentCity}
            />
          ))}
        </ul>
      </section>
    );
  }
}

CitiesList.propTypes = {
  cities: PropTypes.array.isRequired,
  currentCity: PropTypes.string,
  changeCurrentCity: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    cities: [...new Set([...state.offers.map(offer => offer.city)])],
    currentCity: state.city
  };
};

const mapDispatchToProps = dispatch => ({
  changeCurrentCity: city => dispatch(ActionCreators.setCity(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
