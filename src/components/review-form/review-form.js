import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../redux/reducer/reviews/selectors';
import { ActionCreator, Operations } from '../../redux/reducer/reviews/actions';
import withReviewForm from '../../hoc/with-review-form';
import { Constants } from '../../constants';

class ReviewForm extends Component {
  form = React.createRef();

  handleFormSubmit = e => {
    e.preventDefault();
    const { postReview, rating, comment, currentOfferId } = this.props;
    postReview(currentOfferId, { comment, rating });
  };

  handleRatingChange = e => {
    this.props.onChangeRating(e.target.value);
  };

  componentDidUpdate() {
    const { isSent, setSendingStatus } = this.props;

    if (isSent) {
      setSendingStatus();
      this.form.current.reset();
    }
  }

  render() {
    const { onChangeText, isFormValid, comment, isSending } = this.props;
    return (
      <form
        className='reviews__form form'
        action='#'
        method='post'
        onSubmit={this.handleFormSubmit}
        ref={this.form}
      >
        <label className='reviews__label form__label' htmlFor='review'>
          Your review
        </label>
        <div
          className='reviews__rating-form form__rating'
          onChange={this.handleRatingChange}
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
          onChange={onChangeText}
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
            disabled={!isFormValid || isSending}
          >
            {isSending ? `Sending...` : `Submit`}
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  isSent: selectors.getReviewSendingStatus(state),
  isSending: selectors.getReviewSendingProcessStatus(state)
});

const mapDispatchToProps = dispatch => ({
  postReview: (id, review) => {
    dispatch(Operations.postReview(id, review));
    dispatch(ActionCreator.lockForm(true));
  },
  setSendingStatus: () => dispatch(ActionCreator.setSendingStatus(false))
});

const ReviewFormWrapped = withReviewForm(ReviewForm);
export default connect(mapStateToProps, mapDispatchToProps)(ReviewFormWrapped);
