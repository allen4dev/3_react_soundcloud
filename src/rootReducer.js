import { combineReducers } from 'redux';

import tracks from './modules/tracks';
import search from './modules/search';
import playlists from './modules/playlists';

const rootReducer = combineReducers({
  [tracks.constants.NAME]: tracks.reducer,
  [search.constants.NAME]: search.reducer,
  [playlists.constants.NAME]: playlists.reducer,
});

export default rootReducer;
