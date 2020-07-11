import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Card from '../card';
import { ActionCreator } from '../../redux/reducer/data/actions';

class OffersList extends PureComponent {
  static defaultProps = {
    classModOffers: []
  };

  static propTypes = {
    offers: PropTypes.arrayOf(PropTypes.object),
    setCurrentOffer: PropTypes.func.isRequired,
    classModOffers: PropTypes.array,
    classModPrefix: PropTypes.string.isRequired,
    mainClassMod: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired
  };

  onOfferSelect = id => {
    if (!Object.keys(this.props.match.params).length) {
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
  setCurrentOffer: id => dispatch(ActionCreator.setCurrentOffer(id))
});

export { OffersList };
export default connect(null, mapDispatchToProps)(OffersList);
