import React from 'react';
import withFavorite from '../../hoc/with-favorite';
import { Constants } from '../../constants';
import history from '../../history';

const FavoriteButton = ({
  isFavorite,
  prefixClass,
  width,
  height,
  id,
  isAuthRequired,
  updateFavoriteOffers,
  match
}) => {
  const onButtonClick = () => {
    if (isAuthRequired) {
      history.push(Constants.LOGIN_PATH);
      return;
    }
    updateFavoriteOffers(id, isFavorite, match);
  };
  return (
    <button
      type='button'
      className={`${prefixClass}__bookmark-button ${
        !isAuthRequired && isFavorite
          ? `place-card__bookmark-button--active`
          : ``
      } button`}
      aria-pressed={isFavorite ? `true` : `false`}
      onClick={onButtonClick}
    >
      <svg
        className={'place-card__bookmark-icon'}
        aria-hidden='true'
        width={width}
        height={height}
      >
        <use xlinkHref='#icon-bookmark' />
      </svg>
      <span className='visually-hidden'>
        {isFavorite ? `In` : `To`} bookmarks
      </span>
    </button>
  );
};

export { FavoriteButton };
const FavoriteButtonWrapped = withFavorite(FavoriteButton);
export default FavoriteButtonWrapped;
