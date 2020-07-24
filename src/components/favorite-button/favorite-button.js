import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Constants } from '../../constants';
import history from '../../history';
import { getCurrentOfferId } from '../../redux/reducer/data/selectors';
import { Operations as DataOperations } from '../../redux/reducer/data/actions';

import { Operations as FavoritesOperations } from '../../redux/reducer/favorites/actions';
import { getAuthorizationStatus } from '../../redux/reducer/user/selectors';

const FavoriteButton = ({
  isFavorite,
  prefixClass,
  width,
  height,
  id,
  match
}) => {
  const dispatch = useDispatch();
  const isAuthRequired = useSelector(getAuthorizationStatus);
  const currentOfferId = useSelector(getCurrentOfferId);

  const updateFavoriteOffers = (id, isFavorite, match) => {
    dispatch(FavoritesOperations.updateFavorites(id, isFavorite)),
      updateOffers(match);
  };

  const updateOffers = match => {
    switch (match.path) {
      case '/':
        dispatch(DataOperations.loadOffers());
        dispatch(FavoritesOperations.loadFavorites());

        return;
      case '/offer/:id':
        dispatch(DataOperations.loadNearbyOffers(currentOfferId));
        dispatch(FavoritesOperations.loadFavorites());
        dispatch(DataOperations.loadOffers());
        return;
      case '/favorites':
        dispatch(FavoritesOperations.loadFavorites());
        dispatch(DataOperations.loadOffers());
        return;
    }
  };

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

FavoriteButton.propTypes = {
  id: PropTypes.number.isRequired,
  match: PropTypes.object.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  prefixClass: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default FavoriteButton;
