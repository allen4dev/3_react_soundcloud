import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';
import { INITIAL_STATE } from './model';

function entitiesReducer(state = INITIAL_STATE.entities, action) {
  switch (action.type) {
    case actionTypes.SET_PLAYLISTS:
      return {
        ...state,
        ...action.payload,
      };

    case actionTypes.SET_PLAYLIST:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };

    default:
      return state;
  }
}

function tracksReducer(state = INITIAL_STATE.tracks, action) {
  switch (action.type) {
    case actionTypes.SET_PLAYLIST_TRACKS:
      return {
        ...state,
        [action.payload.id]: action.payload.trackIds,
      };

    case actionTypes.SET_NEXT_TRACKS:
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

const reducer = combineReducers({
  entities: entitiesReducer,
  tracks: tracksReducer,
});

export default reducer;
