import * as actionTypes from './actionTypes';

export function setFollowers(userId, followers) {
  return {
    type: actionTypes.SET_FOLLOWERS,
    payload: { userId, followers },
  };
}

export function setNextFollowers(userId, followers) {
  return {
    type: actionTypes.SET_NEXT_FOLLOWERS,
    payload: { userId, followers },
  };
}
