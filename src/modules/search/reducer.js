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
  switch (action.type) {
    case actionTypes.SET_TRACKS:
      return action.payload;

    case actionTypes.SET_NEXT_TRACKS:
      return [...state, ...action.payload];

    default:
      return state;
  }
}

function playlistsReducer(state = INITIAL_STATE.playlists, action) {
  switch (action.type) {
    case actionTypes.SET_PLAYLISTS:
      return action.payload;

    case actionTypes.SET_NEXT_PLAYLISTS:
      return [...state, ...action.payload];

    default:
      return state;
  }
}

function usersReducer(state = INITIAL_STATE.users, action) {
  switch (action.type) {
    case actionTypes.SET_USERS:
      return action.payload;

    case actionTypes.SET_NEXT_USERS:
      return [...state, ...action.payload];

    default:
      return state;
  }
}

function paginationTracksReducer(
  state = INITIAL_STATE.pagination.tracks,
  action
) {
  if (action.type === actionTypes.SET_TRACKS_NEXT_PAGE) {
    return action.payload;
  }

  return state;
}

function paginationPlaylistsReducer(
  state = INITIAL_STATE.pagination.playlists,
  action
) {
  if (action.type === actionTypes.SET_PLAYLISTS_NEXT_PAGE) {
    return action.payload;
  }

  return state;
}

function paginationUsersReducer(
  state = INITIAL_STATE.pagination.users,
  action
) {
  if (action.type === actionTypes.SET_USERS_NEXT_PAGE) {
    return action.payload;
  }

  return state;
}

const paginationReducer = combineReducers({
  tracks: paginationTracksReducer,
  playlists: paginationPlaylistsReducer,
  users: paginationUsersReducer,
});

const reducer = combineReducers({
  query: queryReducer,
  tracks: tracksReducer,
  playlists: playlistsReducer,
  users: usersReducer,
  pagination: paginationReducer,
});

export default reducer;
