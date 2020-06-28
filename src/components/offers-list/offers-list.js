import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Card from '../card/card';

class OffersList extends Component {
  static defaultProps = {
    classModOffers: []
  };

  static propTypes = {
    offers: PropTypes.arrayOf(PropTypes.object),
    classModOffers: PropTypes.array
  };
  state = {
    current: null
  };

  onSelectOffer = id => {
    this.setState({ current: id });
  };

  render() {
    const places = this.props.offers.map(offer => {
      return (
        <Card
          key={offer.id}
          offerDetails={offer}
          selected={this.state.current === offer.id}
          onSelected={this.onSelectOffer}
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

const mapStateToProps = state => {
  return {
    offers: state.offers.filter(offer => {
      return offer.city === state.city;
    })
  };
};

export default connect(mapStateToProps)(OffersList);
