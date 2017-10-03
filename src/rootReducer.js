import { combineReducers } from 'redux';

import tracks from './modules/tracks';
import search from './modules/search';
import playlists from './modules/playlists';
import users from './modules/users';
import comments from './modules/comments';
import followers from './modules/followers';
import followings from './modules/followings';

const rootReducer = combineReducers({
  [tracks.constants.NAME]: tracks.reducer,
  [search.constants.NAME]: search.reducer,
  [playlists.constants.NAME]: playlists.reducer,
  [users.constants.NAME]: users.reducer,
  [comments.constants.NAME]: comments.reducer,
  [followers.constants.NAME]: followers.reducer,
  [followings.constants.NAME]: followings.reducer,
});

export default rootReducer;
