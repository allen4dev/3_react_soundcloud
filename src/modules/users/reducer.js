import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';
import { INITIAL_STATE } from './model';

function currentUserReducer(state = INITIAL_STATE.currentUser, action) {
  if (action.type === actionTypes.SET_CURRENT_USER) {
    return action.payload;
  }

  return state;
}

function entitiesReducer(state = INITIAL_STATE.entities, action) {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };

    case actionTypes.SET_USERS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

function tracksReducer(state = INITIAL_STATE.tracks, action) {
  switch (action.type) {
    case actionTypes.SET_USER_TRACKS:
      return {
        ...state,
        [action.payload.id]: action.payload.trackIds,
      };

    case actionTypes.SET_NEXT_USER_TRACKS:
      return {
        ...state,
        [action.payload.id]: [
          ...state[action.payload.id],
          ...action.payload.trackIds,
        ],
      };

    default:
      return state;
  }
}

function favoritedReducer(state = INITIAL_STATE.favorited, action) {
  switch (action.type) {
    case actionTypes.SET_FAVORITED_TRACKS:
      return {
        ...state,
        [action.payload.id]: action.payload.trackIds,
      };

    case actionTypes.SET_NEXT_FAVORITED_TRACKS:
      return {
        ...state,
        [action.payload.id]: [
          ...state[action.payload.id],
          ...action.payload.trackIds,
        ],
      };

    default:
      return state;
  }
}

function playlistsReducer(state = INITIAL_STATE.playlists, action) {
  switch (action.type) {
    case actionTypes.SET_USER_PLAYLISTS:
      return {
        ...state,
        [action.payload.id]: action.payload.playlistIds,
      };

    case actionTypes.SET_NEXT_USER_PLAYLISTS:
      return {
        ...state,
        [action.payload.id]: [
          ...state[action.payload.id],
          ...action.payload.playlistIds,
        ],
      };

    default:
      return state;
  }
}

const reducer = combineReducers({
  currentUser: currentUserReducer,
  entities: entitiesReducer,
  tracks: tracksReducer,
  favorited: favoritedReducer,
  playlists: playlistsReducer,
});

export default reducer;
