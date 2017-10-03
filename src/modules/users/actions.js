import SC from './../../helpers/soundcloud';

import * as actionTypes from './actionTypes';

import utils from './../../helpers/utils';

import tracks from './../tracks';
import playlists from './../playlists';
import followers from './../followers';
import followings from './../followings';

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

export function setFavoritedTracks(id, trackIds) {
  return {
    type: actionTypes.SET_FAVORITED_TRACKS,
    payload: { id, trackIds },
  };
}

export function setNextFavoritedTracks(id, trackIds) {
  return {
    type: actionTypes.SET_NEXT_FAVORITED_TRACKS,
    payload: { id, trackIds },
  };
}

export function setUserPlaylists(id, playlistIds) {
  return {
    type: actionTypes.SET_USER_PLAYLISTS,
    payload: { id, playlistIds },
  };
}

export function setNextUserPlaylists(id, playlistIds) {
  return {
    type: actionTypes.SET_NEXT_USER_PLAYLISTS,
    payload: { id, playlistIds },
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

export function fetchFavoritedTracks(id) {
  return async dispatch => {
    const response = await SC.get(`/users/${id}/favorites`);
    const results = utils.arrayToObject(response);

    dispatch(tracks.actions.setTracks(results));
    dispatch(setFavoritedTracks(id, Object.keys(results)));

    return results;
  };
}

export function fetchUserPlaylists(id) {
  return async dispatch => {
    const response = await SC.get(`/users/${id}/playlists`);
    const results = utils.arrayToObject(response);

    dispatch(playlists.actions.setPlaylists(results));
    dispatch(setUserPlaylists(id, Object.keys(results)));

    return results;
  };
}

export function fetchUserFollowers(id) {
  return async dispatch => {
    const response = await SC.get(`/users/${id}/followers`);
    const results = utils.arrayToObject(response.collection);
    dispatch(setUsers(results));
    dispatch(followers.actions.setFollowers(id, Object.keys(results)));

    return results;
  };
}

export function fetchUserFollowings(id) {
  return async dispatch => {
    const response = await SC.get(`/users/${id}/followings`);
    const results = utils.arrayToObject(response.collection);

    dispatch(setUsers(results));
    dispatch(followings.actions.setFollowings(id, Object.keys(results)));

    return results;
  };
}
