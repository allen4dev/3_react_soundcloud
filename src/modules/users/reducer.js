import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';
import { INITIAL_STATE } from './model';

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

const reducer = combineReducers({
  entities: entitiesReducer,
  tracks: tracksReducer,
  favorited: favoritedReducer,
});

export default reducer;
