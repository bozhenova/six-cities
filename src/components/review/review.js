import React from 'react';
import PropTypes from 'prop-types';
import { Constants } from '../../constants';
import { parseDate } from '../../utils';

const Review = ({ review }) => {
  const { comment, date, rating, user } = review;

  return (
    <>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img
            className='reviews__avatar user__avatar'
            src={user.avatarUrl}
            width='54'
            height='54'
            alt={user.name}
          />
        </div>
        <span className='reviews__user-name'>{user.name}</span>
        {user.isPro && <span className='reviews__user-status'>Pro</span>}
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            <span
              style={{ width: `${(rating * 100) / Constants.MAX_RATING}%` }}
            />
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <p className='reviews__text'>{comment}</p>
        <time className='reviews__time' dateTime={date}>
          {parseDate(date)}
        </time>
      </div>
    </>
  );
};

Review.propTypes = {
  comment: PropTypes.string,
  date: PropTypes.string,
  rating: PropTypes.number,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    isPro: PropTypes.bool,
    name: PropTypes.string
  })
};

export default Review;
