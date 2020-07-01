import { ActionCreators } from './actions';
import { Constants } from '../constants';

const Operations = {
  loadOffers: () => (dispatch, _getState, api) => {
    return api
      .get(Constants.HOTEL_PATH)
      .then(response => dispatch(ActionCreators.loadOffers(response)));
  }
};

export default Operations;
