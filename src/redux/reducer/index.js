import { combineReducers } from 'redux';

import { reducer as data } from './data';
import { reducer as user } from './user';

const rootReducer = combineReducers({
  data,
  user
});

export default rootReducer;
