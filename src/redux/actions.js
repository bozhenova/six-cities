export const ActionType = {
  SET_CITY: 'SET_CITY',
  SET_CURRENT_OFFER: 'SET_CURRENT_OFFER',
  SET_SORT_TYPE: 'SET_SORT_TYPE'
};

export const ActionCreators = {
  setCity: city => ({
    type: ActionType.SET_CITY,
    payload: city
  }),
  setCurrentOffer: id => ({
    type: ActionType.SET_CURRENT_OFFER,
    payload: id
  }),
  setSortType: type => ({
    type: ActionType.SET_SORT_TYPE,
    payload: type
  })
};
