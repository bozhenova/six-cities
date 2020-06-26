import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';
const shortid = require('shortid');

const ReviewsList = props => {
  const reviews = offers.map(offer => {
    return (
      <li className='reviews__item' key={shortid.generate()}>
        <Review />
      </li>
    );
  });

  return <ul class='reviews__list'>{reviews}</ul>;
};

export default ReviewsList;
