import { ActionTypes as types } from '../../ActionTypes';
import { Constants } from '../../../constants';
import { adaptComments } from '../../../adapter';

export const ActionCreators = {
  loadReviews: reviews => ({
    type: types.LOAD_REVIEWS,
    payload: reviews
  }),
  postReview: () => ({
    type: types.POST_REVIEW
  })
};

export const Operations = {
  loadReviews: id => {
    return (dispatch, _getState, api) => {
      return api
        .get(`${Constants.COMMENTS_PATH}/${id}`)
        .then(response => adaptComments(response))
        .then(data => {
          dispatch(ActionCreators.loadReviews(data));
        });
    };
  }
};
