import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getReviewSendingStatus,
  getReviewSendingProcessStatus
} from '../../redux/reducer/reviews/selectors';
import { ActionCreator, Operations } from '../../redux/reducer/reviews/actions';
import { Constants } from '../../constants';

const ReviewForm = ({ currentOfferId }) => {
  const form = useRef();
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isValid, setIsValid] = useState(false);

  const isSent = useSelector(getReviewSendingStatus);
  const isSending = useSelector(getReviewSendingProcessStatus);

  const handleTextareaChange = e => {
    setComment(e.target.value);
  };

  const handleRatingChange = e => {
    setRating(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(Operations.postReview(currentOfferId, { comment, rating }));
    dispatch(ActionCreator.lockForm(true));
  };

  useEffect(() => {
    const hasText =
      comment.length >= Constants.MIN_TEXT_LENGTH &&
      comment.length <= Constants.MAX_TEXT_LENGTH;
    const hasRating = rating > 0;
    setIsValid(hasText && hasRating);

    if (isSent) {
      setIsValid(false);
      setRating(0);
      setComment('');
      dispatch(ActionCreator.setSendingStatus(false));
      form.current.reset();
    }
  }, [comment, rating, isSent]);

  return (
    <form
      className='reviews__form form'
      action='#'
      method='post'
      onSubmit={handleFormSubmit}
      ref={form}
    >
      <label className='reviews__label form__label' htmlFor='review'>
        Your review
      </label>
      <div
        className='reviews__rating-form form__rating'
        onChange={handleRatingChange}
      >
        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='5'
          id='5-stars'
          type='radio'
        />
        <label
          htmlFor='5-stars'
          className='reviews__rating-label form__rating-label'
          title='perfect'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star' />
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='4'
          id='4-stars'
          type='radio'
        />
        <label
          htmlFor='4-stars'
          className='reviews__rating-label form__rating-label'
          title='good'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star' />
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='3'
          id='3-stars'
          type='radio'
        />
        <label
          htmlFor='3-stars'
          className='reviews__rating-label form__rating-label'
          title='not bad'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star' />
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='2'
          id='2-stars'
          type='radio'
        />
        <label
          htmlFor='2-stars'
          className='reviews__rating-label form__rating-label'
          title='badly'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star' />
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='1'
          id='1-star'
          type='radio'
        />
        <label
          htmlFor='1-star'
          className='reviews__rating-label form__rating-label'
          title='terribly'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star' />
          </svg>
        </label>
      </div>
      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        value={comment}
        onChange={handleTextareaChange}
        minLength={Constants.MIN_TEXT_LENGTH}
        maxLength={Constants.MAX_TEXT_LENGTH}
      />
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set{' '}
          <span className='reviews__star'>rating</span> and describe your stay
          with at least{' '}
          <b className='reviews__text-amount'>
            {Constants.MIN_TEXT_LENGTH} characters
          </b>
          .
        </p>
        <button
          className='reviews__submit form__submit button'
          type='submit'
          disabled={!isValid || isSending}
        >
          {isSending ? `Sending...` : `Submit`}
        </button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  currentOfferId: PropTypes.number.isRequired
};

export default ReviewForm;
