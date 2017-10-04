import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';

import { INITIAL_STATE } from './model';
// import type { Action } from './model';

function entitiesReducer(state = INITIAL_STATE.entities, action) {
  switch (action.type) {
    case actionTypes.SET_TRACKS:
      return {
        ...state,
        ...action.payload,
      };

    case actionTypes.SET_TRACK:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };

    default:
      return state;
  }
}

function commentsReducer(state = INITIAL_STATE.comments, action) {
  switch (action.type) {
    case actionTypes.SET_TRACK_COMMENTS:
      return {
        ...state,
        [action.payload.id]: action.payload.commentIds,
      };

    case actionTypes.SET_NEXT_TRACK_COMMENTS:
      return {
        ...state,
        [action.payload.id]: [
          ...state[action.payload.id],
          ...action.payload.commentIds,
        ],
      };

    default:
      return state;
  }
}

function currentTrackReducer(state = INITIAL_STATE.currentTrack, action) {
  if (action.type === actionTypes.SET_CURRENT_TRACK) {
    return action.payload;
  }

  return state;
}

const reducer = combineReducers({
  entities: entitiesReducer,
  comments: commentsReducer,
  currentTrack: currentTrackReducer,
});

export default reducer;
