import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';
import { INITIAL_STATE } from './model';

function queryReducer(state = INITIAL_STATE.query, action) {
  switch (action.type) {
    case actionTypes.SET_QUERY:
      return action.payload;
    default:
      return state;
  }
}

const reducer = combineReducers({
  query: queryReducer,
  tracks: () => [],
  playlists: () => [],
  users: () => [],
});

export default reducer;
