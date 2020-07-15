import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import FavoriteButtonWrapped from '../favorite-button';
import { Constants, KeyCodes } from '../../constants';

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
  selectOffer,
  match
}) => {
  const onOfferHover = () => {
    if (match.path === '/') {
      selectOffer(id);
    }
  };
  const onOfferClick = () => {
    if (match.path === '/offer/:id') {
      selectOffer(id);
    }
  };

  return (
    <article
      className={`${mainClassMod} place-card`}
      onClick={onOfferClick}
      onMouseEnter={onOfferHover}
    >
      {isPremium ? (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      ) : null}
      <div
        className={`${classModPrefix}__image-wrapper place-card__image-wrapper`}
      >
        <button type='button'>
          <Link to={`/offer/${id}`}>
            <img
              className='place-card__image'
              src={previewPhoto}
              width={`${match.path === `/favorites` ? `150` : `260`}`}
              height={`${match.path === `/favorites` ? `110` : `200`}`}
              alt={title}
            />
          </Link>
        </button>
      </div>
      <div className={`${classModPrefix}__card-info place-card__info`}>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <FavoriteButtonWrapped
            id={id}
            isFavorite={isFavorite}
            prefixClass={'place-card'}
            width={18}
            height={19}
            match={match}
          />
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span
              style={{
                width: `${(rating * 100) / Constants.MAX_RATING}%`
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
  offerDetails: PropTypes.object.isRequired,
  classModPrefix: PropTypes.string.isRequired,
  mainClassMod: PropTypes.string.isRequired,
  selectOffer: PropTypes.func
};

export { Card };
const CardWrapped = withRouter(Card);
export default CardWrapped;
