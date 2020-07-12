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

export const getCurrentOfferCoords = createSelector(
  getCurrentOfferId,
  getSortedOffers,
  (currentOfferId, offers) => {
    const currentOffer = findItemById(currentOfferId, offers);
    return currentOffer ? currentOffer.place.coords : [0, 0];
  }
);
