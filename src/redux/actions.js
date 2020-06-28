export const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY'
};

export const ActionCreators = {
  changeCity: city => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  })
};
