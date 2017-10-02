import { combineReducers } from 'redux';

import tracks from './modules/tracks';
import search from './modules/search';

const rootReducer = combineReducers({
  [tracks.constants.NAME]: tracks.reducer,
  [search.constants.NAME]: search.reducer,
});

export default rootReducer;
