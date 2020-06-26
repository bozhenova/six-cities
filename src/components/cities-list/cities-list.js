import React from 'react';
import PropTypes from 'prop-types';
import City from '../city/city';
const shortid = require('shortid');

const CitiesList = ({ cities }) => {
  return (
    <section className='locations container'>
      <ul className='locations__list tabs__list'>
        {cities.map(city => (
          <City key={shortid.generate()} city={city} />
        ))}
      </ul>
    </section>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.array.isRequired
};

export default CitiesList;
