import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';
import { INITIAL_STATE } from './model';

function idsReducer(state = INITIAL_STATE.ids, action) {
  switch (action.type) {
    case actionTypes.SET_FOLLOWINGS:
      return {
        ...state,
        [action.payload.userId]: action.payload.followings,
      };

    case actionTypes.SET_NEXT_USERS_FOLLOWINGS:
      return {
        ...state,
        [action.payload.userId]: [
          ...state[action.payload.userId],
          ...action.payload.followings,
        ],
      };
    default:
      return state;
  }
}

const reducer = combineReducers({
  ids: idsReducer,
});

export default reducer;
