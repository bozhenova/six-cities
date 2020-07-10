import React from 'react';
import PropTypes from 'prop-types';

const City = ({ city, currentCity, changeCity }) => {
  const onCityClick = e => {
    e.preventDefault();
    changeCity(city);
  };

  return (
    <li className='locations__item'>
      <button
        type='button'
        className={`locations__item-link tabs__item ${
          currentCity === city ? `tabs__item--active` : ``
        }`}
        onClick={onCityClick}
      >
        <span>{city}</span>
      </button>
    </li>
  );
};

City.propTypes = {
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired
};

export default City;
