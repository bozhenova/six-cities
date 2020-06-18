import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
const shortid = require('shortid');

const OffersList = ({ offers, handleCardHover }) => {
  const places = offers.map(offer => {
    return (
      <li key={shortid.generate()}>
        <Card offerDetails={offer} onCardHover={handleCardHover} />
      </li>
    );
  });

  return (
    <ul className='cities__places-list places__list tabs__content'>{places}</ul>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  handleCardHover: PropTypes.func.isRequired
};

export default OffersList;
