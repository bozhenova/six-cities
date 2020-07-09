import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const shortid = require('shortid');

import * as selectors from '../../redux/reducer/data/selectors';
import { ActionCreators } from '../../redux/reducer/data/actions';
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
    cities: selectors.getUniqueCities(state),
    currentCity: selectors.getCurrentCity(state)
  };
};

const mapDispatchToProps = dispatch => ({
  changeCurrentCity: city => dispatch(ActionCreators.setCity(city))
});

export { CitiesList };
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
