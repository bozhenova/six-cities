import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Card from '../card/card';
import { ActionCreators } from '../../redux/actions';

class OffersList extends Component {
  static defaultProps = {
    classModOffers: []
  };

  static propTypes = {
    offers: PropTypes.arrayOf(PropTypes.object),
    setCurrentOffer: PropTypes.func.isRequired,
    classModOffers: PropTypes.array
  };

  onOfferSelect = id => {
    this.props.setCurrentOffer(id);
  };

  render() {
    const places = this.props.offers.map(offer => {
      return (
        <Card
          key={offer.id}
          offerDetails={offer}
          selectOffer={this.onOfferSelect}
          classModPrefix={`cities`}
          mainClassMod={`cities__place-card`}
        />
      );
    });
    return (
      <div className={`${this.props.classModOffers.join(` `)} places__list `}>
        {places}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentOffer: id => dispatch(ActionCreators.setCurrentOffer(id))
});

export { OffersList };
export default connect(null, mapDispatchToProps)(OffersList);
