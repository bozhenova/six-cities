import React from 'react';
import PropTypes from 'prop-types';
import { KeyCodes } from '../../constants';

const City = ({ city, currentCity, changeCity }) => {
  const handleClick = e => {
    e.preventDefault();
    changeCity(city);
  };

  const handleKeyPress = e => {
    e.preventDefault();
    if (e.key === KeyCodes.ENTER) {
      changeCity(city);
    }
  };

  return (
    <li className='locations__item'>
      <a
        className={`locations__item-link tabs__item ${
          currentCity === city ? `tabs__item--active` : ``
        }`}
        onClick={handleClick}
        tabIndex={0}
        onKeyPress={handleKeyPress}
      >
        <span>{city}</span>
      </a>
    </li>
  );
};

City.propTypes = {
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired
};

export default City;
