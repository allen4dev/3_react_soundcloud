import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';
import { INITIAL_STATE } from './model';

function queryReducer(state = INITIAL_STATE.query, action) {
  if (action.type === actionTypes.SET_QUERY) {
    return {
      current: action.payload,
      prev: state.current,
    };
  }

  return state;
}

function tracksReducer(state = INITIAL_STATE.tracks, action) {
  if (action.type === actionTypes.SET_TRACKS) {
    // UPDATE THIS
    return action.payload;
  }

  return state;
}

function playlistsReducer(state = INITIAL_STATE.playlists, action) {
  if (action.type === actionTypes.SET_PLAYLISTS) {
    return [...state, ...action.payload];
  }

  return state;
}

function usersReducer(state = INITIAL_STATE.users, action) {
  if (action.type === actionTypes.SET_USERS) {
    return [...state, ...action.payload];
  }

  return state;
}

const reducer = combineReducers({
  query: queryReducer,
  tracks: tracksReducer,
  playlists: playlistsReducer,
  users: usersReducer,
});

export default reducer;
