export const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY',
  FILTER_OFFERS: 'FILTER_OFFERS'
};

const filterOffers = (city, offers) => {
  return offers.filter(offer => {
    return offer.city === city;
  });
};

export const ActionCreators = {
  changeCity: city => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  filterOffers: offers => ({
    type: ActionType.FILTER_OFFERS,
    payload: filterOffers(city, [...offers])
  })
};
