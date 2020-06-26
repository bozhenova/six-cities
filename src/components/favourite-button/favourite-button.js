import React from 'react';

const FavouriteButton = ({
  isFavorite,
  prefixClass,
  width = 18,
  height = 19
}) => {
  return (
    <button
      type='button'
      className={`${prefixClass}__bookmark-button ${
        isFavorite ? `place-card__bookmark-button--active` : ``
      } button`}
      aria-pressed={isFavorite ? `true` : `false`}
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

export default FavouriteButton;
