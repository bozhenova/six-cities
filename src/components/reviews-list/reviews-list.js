import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';

const ReviewsList = ({ reviews }) => {
  const reviewsList = reviews.map(review => {
    return (
      <li className='reviews__item' key={review.id}>
        <Review review={review} />
      </li>
    );
  });

  return <ul className='reviews__list'>{reviewsList}</ul>;
};

ReviewsList.propTypes = {
  reviews: PropTypes.array
};

export default ReviewsList;
