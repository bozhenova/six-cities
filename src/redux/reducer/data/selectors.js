import { createSelector } from 'reselect';
import { findItemById } from '../../../utils';

export const getOffers = state => state.data.offers;
export const getNearbyOffers = state => state.data.nearbyOffers;
export const getCurrentCity = state => state.data.currentCity;
export const getCurrentOfferId = state => state.data.currentOfferId;
export const getSortType = state => state.data.sortType;

export const getUniqueCities = createSelector(getOffers, offers => {
  return [...new Set(offers.map(offer => offer.city.name))];
});

export const getSortedOffers = createSelector(
  getCurrentCity,
  getOffers,
  getSortType,
  (city, allOffers, sortType) => {
    const offers = allOffers.filter(offer => offer.city.name === city);
    switch (sortType) {
      case `popular`:
        return offers;
      case `to-high`:
        return offers.slice().sort((a, b) => a.price - b.price);
      case `to-low`:
        return offers.slice().sort((a, b) => b.price - a.price);
      case `top-rated`:
        return offers.slice().sort((a, b) => b.rating - a.rating);

      default:
        break;
    }
  }
);

export const getOfferById = (state, id) => {
  const offers = getOffers(state);
  return offers.find(offer => offer.id == id);
};

export const getOffer = createSelector(
  getOffers,
  getOfferById,
  (offers, currentOffer) => {
    return offers.find(offer => offer.id === currentOffer.id);
  }
);

export const getCurrentOfferCoords = createSelector(
  getCurrentOfferId,
  getOffers,
  (currentOfferId, offers) => {
    const currentOffer = findItemById(currentOfferId, offers) || {};
    return Object.keys(currentOffer).length
      ? currentOffer.place.coords
      : [0, 0];
  }
);
