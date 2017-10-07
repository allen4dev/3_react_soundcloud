import SC from './../../helpers/soundcloud';

import * as actionTypes from './actionTypes';

import utils from './../../helpers/utils';

import tracks from './../tracks';
import playlists from './../playlists';
import followers from './../followers';
import followings from './../followings';

// Action creators
export function setCurrentUser(id) {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: id,
  };
}

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

export function fetchUserTracks(id, limit = 12) {
  return async dispatch => {
    const response = await SC.get(`/users/${id}/tracks`, { limit });
    const results = utils.arrayToObject(response);

    dispatch(tracks.actions.setTracks(results));
    dispatch(setUserTracks(id, Object.keys(results)));

    return results;
  };
}

export function fetchFavoritedTracks(id, limit = 12) {
  return async dispatch => {
    const response = await SC.get(`/users/${id}/favorites`, { limit });
    const filtered = response.map(utils.filterTrack);
    const results = utils.arrayToObject(filtered);

    dispatch(tracks.actions.setTracks(results));
    dispatch(setFavoritedTracks(id, Object.keys(results)));

    return results;
  };
}

export function fetchUserPlaylists(id, limit = 12) {
  return async dispatch => {
    const response = await SC.get(`/users/${id}/playlists`, { limit });
    const filtered = response.map(utils.filterPlaylist);
    const results = utils.arrayToObject(filtered);

    dispatch(playlists.actions.setPlaylists(results));
    dispatch(setUserPlaylists(id, Object.keys(results)));

    return results;
  };
}

export function fetchUserFollowers(id, limit = 12) {
  return async dispatch => {
    const response = await SC.get(`/users/${id}/followers`, { limit });
    const filtered = response.collection.map(utils.filterUser);
    const results = utils.arrayToObject(filtered);
    dispatch(setUsers(results));
    dispatch(followers.actions.setFollowers(id, Object.keys(results)));

    return results;
  };
}

export function fetchUserFollowings(id, limit = 12) {
  return async dispatch => {
    const response = await SC.get(`/users/${id}/followings`, { limit });
    const filtered = response.collection.map(utils.filterUser);
    const results = utils.arrayToObject(filtered);

    dispatch(setUsers(results));
    dispatch(followings.actions.setFollowings(id, Object.keys(results)));

    return results;
  };
}
