import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const shortid = require('shortid');

import {
  getUniqueCities,
  getCurrentCity
} from '../../redux/reducer/data/selectors';
import { ActionCreator } from '../../redux/reducer/data/actions';
import City from '../city';

const CitiesList = () => {
  const dispatch = useDispatch();
  const cities = useSelector(getUniqueCities);
  const currentCity = useSelector(getCurrentCity);

  const changeCity = city => {
    dispatch(ActionCreator.setCity(city));
  };

  return (
    <section className='locations container'>
      <ul className='locations__list tabs__list'>
        {cities.map(city => (
          <City
            key={shortid.generate()}
            city={city}
            changeCity={changeCity}
            currentCity={currentCity}
          />
        ))}
      </ul>
    </section>
  );
};

export default CitiesList;
