import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Operations from '../../redux/operations';

import Card from '../card/card';
import { ActionCreators } from '../../redux/actions';

class OffersList extends Component {
  static defaultProps = {
    classModOffers: []
  };

  static propTypes = {
    offers: PropTypes.arrayOf(PropTypes.object),
    setCurrentOffer: PropTypes.func.isRequired,
    classModOffers: PropTypes.array,
    classModPrefix: PropTypes.string.isRequired,
    mainClassMod: PropTypes.string.isRequired
  };

  onOfferSelect = id => {
    if (this.props.offers.length > 3) {
      this.props.setCurrentOffer(id);
    }
  };

  render() {
    const { classModPrefix, offers, mainClassMod, classModOffers } = this.props;
    const places = offers.map(offer => {
      return (
        <Card
          key={offer.id}
          offerDetails={offer}
          selectOffer={this.onOfferSelect}
          classModPrefix={classModPrefix}
          mainClassMod={mainClassMod}
        />
      );
    });
    return (
      <div className={`${classModOffers.join(` `)} places__list `}>
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
