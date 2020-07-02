import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FavoriteButton from '../favorite-button/favorite-button';

const Card = ({
  offerDetails: {
    title,
    id,
    previewPhoto,
    isPremium,
    isFavorite,
    price,
    type,
    rating
  },
  mainClassMod = ``,
  classModPrefix = ``,
  selectOffer
}) => {
  const onOfferHover = e => {
    e.preventDefault();
    selectOffer(id);
  };

  return (
    <article className={`${mainClassMod} place-card`}>
      {isPremium ? (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      ) : null}
      <div
        className={`${classModPrefix}__image-wrapper place-card__image-wrapper`}
        onMouseEnter={onOfferHover}
      >
        <button type='button'>
          <img
            className='place-card__image'
            src={previewPhoto}
            width='260'
            height='200'
            alt={title}
          />
        </button>
      </div>
      <div className={`${classModPrefix}__card-info place-card__info`}>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <FavoriteButton
            id={id}
            isFavorite={isFavorite}
            prefixClass={`place-card`}
          />
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
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  offerDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    previewPhoto: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }),
  classModPrefix: PropTypes.string.isRequired,
  mainClassMod: PropTypes.string.isRequired,
  selectOffer: PropTypes.func.isRequired
};

export default Card;
