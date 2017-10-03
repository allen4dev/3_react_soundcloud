import SC from './../../helpers/soundcloud';

import * as actionTypes from './actionTypes';

import utils from './../../helpers/utils';

import tracks from './../tracks';

// Action creators
export function setUser(user) {
  return {
    type: actionTypes.SET_USER,
    payload: user,
  };
}

export function setUsers(users) {
  return {
    type: actionTypes.SET_USERS,
    payload: users,
  };
}

export function setUserTracks(id, trackIds) {
  return {
    type: actionTypes.SET_USER_TRACKS,
    payload: { id, trackIds },
  };
}

export function setNextUserTracks(id, trackIds) {
  return {
    type: actionTypes.SET_NEXT_USER_TRACKS,
    payload: { id, trackIds },
  };
}

// Async actions

export function fetchUser(id) {
  return async dispatch => {
    const user = await SC.get(`/users/${id}`);

    dispatch(setUser(user));
    return user;
  };
}

export function fetchUserTracks(id) {
  return async dispatch => {
    const response = await SC.get(`/users/${id}/tracks`);
    const results = utils.arrayToObject(response);

    dispatch(tracks.actions.setTracks(results));
    dispatch(setUserTracks(id, Object.keys(results)));

    return results;
  };
}
