import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class City extends Component {
  onChangeCity = () => {};

  render() {
    const { city, currentCity } = this.props;

    return (
      <li className='locations__item'>
        <button
          type='button'
          className={`locations__item-link tabs__item ${
            currentCity === city ? `tabs__item--active` : ``
          }`}
          onClick={this.onChangeCity}
        >
          <span>{city}</span>
        </button>
      </li>
    );
  }
}

City.propTypes = {
  city: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  currentCity: PropTypes.string
};

export default City;
