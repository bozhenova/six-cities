import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const shortid = require('shortid');

import {
  getUniqueCities,
  getCurrentCity
} from '../../redux/reducer/data/selectors';
import { ActionCreator } from '../../redux/reducer/data/actions';
import City from '../city';

class CitiesList extends PureComponent {
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
  currentCity: PropTypes.string.isRequired,
  cities: PropTypes.array,
  changeCurrentCity: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    cities: getUniqueCities(state),
    currentCity: getCurrentCity(state)
  };
};

const mapDispatchToProps = dispatch => ({
  changeCurrentCity: city => dispatch(ActionCreator.setCity(city))
});

export { CitiesList };
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
