import * as actionTypes from './actionTypes';

export function setFollowings(userId, followings) {
  return {
    type: actionTypes.SET_FOLLOWINGS,
    payload: { userId, followings },
  };
}

export function setNextUsersFollowings(userId, followings) {
  return {
    type: actionTypes.SET_NEXT_USERS_FOLLOWINGS,
    payload: { userId, followings },
  };
}
