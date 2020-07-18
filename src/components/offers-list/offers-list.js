import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import CardWrapped from '../card';
import { ActionCreator } from '../../redux/reducer/data/actions';

const OffersList = ({
  classModPrefix,
  offers,
  mainClassMod,
  classModOffers
}) => {
  const dispatch = useDispatch();

  const onOfferSelect = id => {
    dispatch(ActionCreator.setCurrentOffer(id));
  };

  const places = offers.map(offer => {
    return (
      <CardWrapped
        key={offer.id}
        offerDetails={offer}
        selectOffer={onOfferSelect}
        classModPrefix={classModPrefix}
        mainClassMod={mainClassMod}
      />
    );
  });
  return (
    <div className={`${classModOffers.join(` `)} places__list `}>{places}</div>
  );
};

OffersList.propTypes = {
  classModPrefix: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  classModOffers: PropTypes.array.isRequired,
  mainClassMod: PropTypes.string.isRequired
};

export default OffersList;
