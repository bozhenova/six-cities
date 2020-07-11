import * as moment from 'moment';
import { Constants } from '../../../constants';

export const getReviews = state =>
  state.reviews.reviews
    .sort((a, b) => moment(b.date).valueOf() - moment(a.date).valueOf())
    .slice(0, Constants.AMOUNT_COMMENTS);
export const getReviewSendingStatus = state => state.reviews.isSent;
export const getReviewSendingProcessStatus = state => state.reviews.isSending;
