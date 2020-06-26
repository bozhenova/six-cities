import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreators } from '../../redux/actions';

class City extends Component {
  static propTypes = {
    city: PropTypes.string.isRequired,
    changeCity: PropTypes.func.isRequired,
    currentCity: PropTypes.string
  };

  onCityClick = e => {
    e.preventDefault();
    this.props.changeCity(this.props.city);
  };

  render() {
    const { city, currentCity } = this.props;

    return (
      <li className='locations__item'>
        <button
          type='button'
          className={`locations__item-link tabs__item ${
            currentCity === city ? `tabs__item--active` : ``
          }`}
          onClick={this.onCityClick}
        >
          <span>{city}</span>
        </button>
      </li>
    );
  }
}

const mapStateToProps = state => ({ currentCity: state.city });

const mapDispatchToProps = dispatch => ({
  changeCity: city => dispatch(ActionCreators.changeCity(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(City);
