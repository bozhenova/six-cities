import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CardWrapped from '../card';
import { ActionCreator as DataActions } from '../../redux/reducer/data/actions';

class OffersList extends PureComponent {
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
    const { setCurrentOffer } = this.props;
    setCurrentOffer(id);
  };

  render() {
    const { classModPrefix, offers, mainClassMod, classModOffers } = this.props;
    const places = offers.map(offer => {
      return (
        <CardWrapped
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
  setCurrentOffer: id => dispatch(DataActions.setCurrentOffer(id))
});

export { OffersList };
export default connect(null, mapDispatchToProps)(OffersList);
