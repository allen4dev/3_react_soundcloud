import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';
import { INITIAL_STATE } from './model';

function entitiesReducer(state = INITIAL_STATE.entities, action) {
  switch (action.type) {
    case actionTypes.SET_COMMENT:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };

    case actionTypes.SET_COMMENTS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

const reducer = combineReducers({
  entities: entitiesReducer,
});

export default reducer;
