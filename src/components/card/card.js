import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  static propTypes = {
    offerDetails: PropTypes.shape({
      title: PropTypes.string.isRequired,
      previewPhoto: PropTypes.string.isRequired,
      isPremium: PropTypes.bool.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      price: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    }),
    onCardHover: PropTypes.func.isRequired
  };

  render() {
    const {
      offerDetails: {
        title,
        previewPhoto,
        isPremium,
        isFavorite,
        price,
        type,
        rating
      },
      onCardHover
    } = this.props;

    const premium = isPremium && (
      <div className='place-card__mark'>
        <span>Premium</span>
      </div>
    );

    const favorite = isFavorite
      ? `place-card__bookmark-button button place-card__bookmark-button--active`
      : `place-card__bookmark-button button`;

    return (
      <article
        className='cities__place-card place-card'
        onMouseEnter={onCardHover}
      >
        {premium}
        <div className='cities__image-wrapper place-card__image-wrapper'>
          <a href='#'>
            <img
              className='place-card__image'
              src={previewPhoto}
              width='260'
              height='200'
              alt='Place image'
            />
          </a>
        </div>
        <div className='place-card__info'>
          <div className='place-card__price-wrapper'>
            <div className='place-card__price'>
              <b className='place-card__price-value'>&euro;{price}</b>
              <span className='place-card__price-text'>&#47;&nbsp;night</span>
            </div>
            <button className={favorite} type='button'>
              <svg className='place-card__bookmark-icon' width='18' height='19'>
                <use xlinkHref='#icon-bookmark' />
              </svg>
              <span className='visually-hidden'>To bookmarks</span>
            </button>
          </div>
          <div className='place-card__rating rating'>
            <div className='place-card__stars rating__stars'>
              <span
                style={{
                  width: `${rating}%`
                }}
              />
              <span className='visually-hidden'>Rating</span>
            </div>
          </div>
          <h2 className='place-card__name'>
            <a className='title' href='#'>
              {title}
            </a>
          </h2>
          <p className='place-card__type'>{type}</p>
        </div>
      </article>
    );
  }
}

export default Card;
